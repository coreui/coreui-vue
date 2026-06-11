import { computed, defineComponent, h, inject, ref, type VNode } from 'vue'

import { Color } from '../../props'
import { chipSetContextKey, type ChipSetConfig } from '../chip-set/useChipSet'

const CChip = defineComponent({
  name: 'CChip',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Provides an accessible label for the remove button.
     */
    ariaRemoveLabel: {
      type: String,
      default: 'Remove',
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'span',
    },
    /**
     * Enables interactive hover styling and pointer cursor.
     */
    clickable: Boolean,
    /**
     * Sets the color context of the component to one of CoreUI's themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Toggle the disabled state for the component.
     *
     * Defaults to `undefined` so a chip can override the value inherited from a `CChipSet` (including turning it off).
     */
    disabled: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Turns the component into a filter chip. A filter chip is selectable and shows a leading check icon while selected.
     *
     * Defaults to `undefined` so a chip can override the value inherited from a `CChipSet`.
     */
    filter: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Displays a remove button inside the component.
     *
     * Defaults to `undefined` so a chip can override the value inherited from a `CChipSet` (including turning it off).
     */
    removable: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Replaces the default remove icon with a custom icon node.
     */
    removeIcon: {
      type: [String, Object],
      default: undefined,
    },
    /**
     * Enables selectable behavior and keyboard toggle support.
     *
     * Defaults to `undefined` so a chip can override the value inherited from a `CChipSet`.
     */
    selectable: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Controls the selected state of a selectable component.
     */
    selected: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Replaces the default selected icon shown by a filter chip with a custom icon node.
     */
    selectedIcon: {
      type: [String, Object],
      default: undefined,
    },
    /**
     * Size the component small or large.
     *
     * @values 'sm', 'lg'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Sets the value associated with the component, used by `CChipSet` to track selection.
     */
    value: {
      type: String,
      default: undefined,
    },
    /**
     * Set the button variant to an outlined style.
     *
     * @values 'outline'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return value === 'outline'
      },
    },
  },
  emits: [
    /**
     * Event called when the user clicks on the component.
     */
    'click',
    /**
     * Event called when the component becomes deselected.
     */
    'deselect',
    /**
     * Event called when the user presses a key.
     */
    'keydown',
    /**
     * Event called when the component requests removal.
     */
    'remove',
    /**
     * Event called when the component becomes selected.
     */
    'select',
    /**
     * Event called when the selected state changes.
     */
    'selected-change',
  ],
  setup(props, { attrs, emit, slots, expose }) {
    const chipRef = ref<HTMLElement>()
    const internalSelected = ref(false)

    // A chip placed inside a CChipSet / CChipInput reads its coordinated state
    // from the set context; standalone it manages its own.
    const chipSet = inject(chipSetContextKey, null)

    const config = <K extends keyof ChipSetConfig>(key: K): ChipSetConfig[K] | undefined =>
      chipSet?.config.value[key]

    // A chip's own prop (when set) overrides the set-level config; otherwise it
    // inherits it. `??` makes this work because the overridable props default to
    // `undefined`, so an explicit `false` still wins over the set.
    const isDisabled = computed(() => Boolean(props.disabled ?? config('disabled')))
    const isFilter = computed(() => Boolean(props.filter ?? config('filter')))
    const isRemovable = computed(() => Boolean(props.removable ?? config('removable')))
    // A filter chip is selectable by definition.
    const isSelectable = computed(
      () => Boolean((props.selectable ?? config('selectable')) || isFilter.value),
    )
    const removeIcon = computed(() => props.removeIcon ?? config('removeIcon'))
    const selectedIcon = computed(() => props.selectedIcon ?? config('selectedIcon'))
    const ariaRemoveLabel = computed(() => props.ariaRemoveLabel)

    const coordinated = computed(() => chipSet !== null && props.value !== undefined)

    const selectedState = computed(() => {
      if (coordinated.value) {
        return chipSet!.isSelected(props.value as string)
      }
      return props.selected !== undefined ? Boolean(props.selected) : internalSelected.value
    })

    const isFocusable = computed(
      () => Boolean(!isDisabled.value && (isSelectable.value || isRemovable.value)),
    )

    const setSelectableState = (nextSelected: boolean, event: MouseEvent | KeyboardEvent): void => {
      if (!isSelectable.value || isDisabled.value || nextSelected === selectedState.value) {
        return
      }

      if (coordinated.value) {
        chipSet!.toggleSelected(props.value as string, nextSelected, event)
      } else if (props.selected === undefined) {
        internalSelected.value = nextSelected
      }

      if (nextSelected) {
        emit('select', event)
      } else {
        emit('deselect', event)
      }

      emit('selected-change', nextSelected, event)
    }

    const toggleSelectedState = (event: MouseEvent | KeyboardEvent): void => {
      setSelectableState(!selectedState.value, event)
    }

    const handleRemove = (event: MouseEvent | KeyboardEvent): void => {
      if (coordinated.value) {
        chipSet!.removeChip(props.value as string, event)
      }

      emit('remove', event)
    }

    const handleRemoveClick = (event: MouseEvent): void => {
      event.stopPropagation()
      handleRemove(event)
    }

    const handleClick = (event: MouseEvent): void => {
      if (isDisabled.value) {
        return
      }

      if ((event.target as HTMLElement).closest('.chip-remove')) {
        return
      }

      if (isSelectable.value) {
        toggleSelectedState(event)
      }

      emit('click', event)
    }

    const handleKeydown = (event: KeyboardEvent): void => {
      if (isDisabled.value) {
        emit('keydown', event)
        return
      }

      switch (event.key) {
        case 'Enter':
        case ' ':
        case 'Spacebar': {
          if (isSelectable.value) {
            event.preventDefault()
            toggleSelectedState(event)
          }
          break
        }

        case 'Backspace':
        case 'Delete': {
          if (isRemovable.value) {
            event.preventDefault()
            handleRemove(event)
          }
          break
        }

        // No default
      }

      emit('keydown', event)
    }

    expose({ chipRef })

    return () => {
      const removeIconVNode =
        slots.removeIcon?.() ||
        removeIcon.value ||
        h(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: 16,
            height: 16,
            viewBox: '0 0 16 16',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': 2,
            'stroke-linecap': 'round',
          },
          [
            h('line', { x1: 4, y1: 4, x2: 12, y2: 12 }),
            h('line', { x1: 12, y1: 4, x2: 4, y2: 12 }),
          ],
        )

      const selectedIconVNode =
        slots.selectedIcon?.() ||
        selectedIcon.value ||
        h(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: 16,
            height: 16,
            viewBox: '0 0 512 512',
            fill: 'currentColor',
          },
          h('path', {
            d: 'M425.373 89.373 196 318.745 86.627 209.373l-45.254 45.254L196 409.255l274.627-274.628z',
          }),
        )

      const children = [
        isFilter.value &&
          selectedState.value &&
          h('span', { class: 'chip-check', 'aria-hidden': 'true' }, selectedIconVNode as VNode),
        slots.default && slots.default(),
        isRemovable.value &&
          !isDisabled.value &&
          h(
            'button',
            {
              type: 'button',
              class: 'chip-remove',
              'aria-label': ariaRemoveLabel.value,
              onClick: handleRemoveClick,
              tabindex: -1,
            },
            removeIconVNode as VNode,
          ),
      ].filter(Boolean)

      return h(
        props.as,
        {
          ref: chipRef,
          class: [
            'chip',
            {
              active: isSelectable.value ? selectedState.value : props.active,
              disabled: isDisabled.value,
              [`chip-${props.color}`]: props.color,
              [`chip-${props.size}`]: props.size,
              'chip-clickable': props.clickable || isSelectable.value || attrs.onClick,
              'chip-outline': props.variant === 'outline',
            },
            attrs.class,
          ],
          'data-coreui-chip-value': props.value,
          ...(isDisabled.value && { 'aria-disabled': true }),
          ...(isSelectable.value && { 'aria-selected': selectedState.value }),
          ...(isFocusable.value && !attrs.tabindex && { tabindex: 0 }),
          onClick: handleClick,
          onKeydown: handleKeydown,
          ...(props.as === 'button' && { disabled: isDisabled.value }),
        },
        children,
      )
    }
  },
})

export { CChip }
