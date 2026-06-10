import { computed, nextTick, provide, ref, type ComputedRef, type InjectionKey } from 'vue'

import { SELECTOR_CHIP_FOCUSABLE } from '../chip/const'

export interface ChipSetConfig {
  disabled?: boolean
  filter?: boolean
  removable?: boolean
  removeIcon?: string | object
  selectable?: boolean
  selectedIcon?: string | object
}

export interface ChipSetContext {
  /** Config forwarded to every chip in the set; the chip's own props win. */
  config: ComputedRef<ChipSetConfig>
  isSelected: (value: string) => boolean
  toggleSelected: (value: string, next: boolean, event: MouseEvent | KeyboardEvent) => void
  removeChip: (value: string, event: MouseEvent | KeyboardEvent) => void
}

export const chipSetContextKey: InjectionKey<ChipSetContext> = Symbol('CChipSet')

export interface UseChipSetOptions {
  config: ComputedRef<ChipSetConfig>
  selectionMode?: () => 'single' | 'multiple'
  /** Controlled selected values (e.g. v-model). Undefined keeps it uncontrolled. */
  modelValue?: () => string[] | undefined
  defaultValue?: string[]
  /** Move focus to a neighbor after removal. Containers with their own target (CChipInput → input) pass false. */
  restoreFocusOnRemove?: boolean
  onSelectionChange?: (selected: string[]) => void
  onRemove?: (value: string) => void
}

/**
 * Shared chip-set engine for CChipSet and CChipInput — the Vue equivalent of the
 * vanilla `ChipInput extends ChipSet`. It owns selection coordination
 * (single/multiple, controlled-or-uncontrolled), roving focus, and the
 * focus-a-neighbor-after-removal behavior, and `provide`s a context that CChip
 * injects. Existence of the chips stays with the caller.
 */
export const useChipSet = (options: UseChipSetOptions) => {
  const {
    config,
    selectionMode = () => 'multiple',
    modelValue = () => undefined,
    defaultValue = [],
    restoreFocusOnRemove = true,
    onSelectionChange,
    onRemove,
  } = options

  const rootRef = ref<HTMLElement>()
  const internalSelected = ref<string[]>(defaultValue)

  const selectedValues = computed(() => {
    const controlled = modelValue()
    return controlled === undefined ? internalSelected.value : controlled
  })

  const getFocusableChips = (): HTMLElement[] => [
    ...(rootRef.value?.querySelectorAll<HTMLElement>(SELECTOR_CHIP_FOCUSABLE) ?? []),
  ]

  const emitSelection = (next: string[]): void => {
    if (modelValue() === undefined) {
      internalSelected.value = next
    }
    onSelectionChange?.(next)
  }

  const toggleSelected = (value: string, next: boolean): void => {
    const isSelected = selectedValues.value.includes(value)
    if (next === isSelected) {
      return
    }

    if (next) {
      // Single selection mode keeps only the freshly selected chip.
      emitSelection(selectionMode() === 'single' ? [value] : [...selectedValues.value, value])
      return
    }

    emitSelection(selectedValues.value.filter((item) => item !== value))
  }

  const clearSelection = (): void => {
    if (selectedValues.value.length > 0) {
      emitSelection([])
    }
  }

  const removeChip = (value: string): void => {
    if (restoreFocusOnRemove) {
      const chips = getFocusableChips()
      const index = chips.findIndex((chip) => chip.dataset.coreuiChipValue === value)
      // Prefer the next chip, fall back to the previous one at the end.
      const neighbor = chips[index + 1] ?? chips[index - 1] ?? null
      const neighborValue = neighbor?.dataset.coreuiChipValue ?? null

      if (neighborValue !== null) {
        nextTick(() => {
          rootRef.value
            ?.querySelector<HTMLElement>(`[data-coreui-chip-value="${neighborValue}"]`)
            ?.focus()
        })
      }
    }

    emitSelection(selectedValues.value.filter((item) => item !== value))
    onRemove?.(value)
  }

  // Roving focus: arrow keys move between chips and Home/End jump to the edges,
  // with no cycling. Returns true when the key was handled.
  const handleKeydown = (event: KeyboardEvent): boolean => {
    const chip = (event.target as HTMLElement).closest<HTMLElement>(SELECTOR_CHIP_FOCUSABLE)
    if (!chip) {
      return false
    }

    const chips = getFocusableChips()
    const index = chips.indexOf(chip)

    switch (event.key) {
      case 'ArrowLeft': {
        event.preventDefault()
        chips[index - 1]?.focus()
        return true
      }

      case 'ArrowRight': {
        event.preventDefault()
        chips[index + 1]?.focus()
        return true
      }

      case 'Home': {
        event.preventDefault()
        chips[0]?.focus()
        return true
      }

      case 'End': {
        event.preventDefault()
        chips[chips.length - 1]?.focus()
        return true
      }

      default: {
        return false
      }
    }
  }

  provide(chipSetContextKey, {
    config,
    isSelected: (value: string) => selectedValues.value.includes(value),
    toggleSelected: (value, next) => toggleSelected(value, next),
    removeChip: (value) => removeChip(value),
  })

  return { rootRef, selectedValues, clearSelection, getFocusableChips, handleKeydown }
}
