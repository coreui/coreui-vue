import { computed, defineComponent, h, ref, watch, PropType } from 'vue'

import { CChip } from '../chip/CChip'

type ChipClassName = string | ((value: string) => string)

const uniqueValues = (values: string[]): string[] => [
  ...new Set(values.map((value) => value.trim()).filter(Boolean)),
]

const resolveChipClassName = (
  chipClassName: ChipClassName | undefined,
  value: string,
): string | undefined => {
  if (!chipClassName) {
    return undefined
  }

  if (typeof chipClassName === 'function') {
    const resolvedClassName = chipClassName(value)
    return typeof resolvedClassName === 'string' ? resolvedClassName : undefined
  }

  return chipClassName
}

const CChipInput = defineComponent({
  name: 'CChipInput',
  props: {
    /**
     * Adds custom classes to chips rendered by the component. Accepts a static className or a resolver function based on chip value.
     */
    chipClassName: {
      type: [String, Function] as PropType<ChipClassName>,
      default: undefined,
    },
    /**
     * Creates a new chip when the component loses focus with a pending value.
     */
    createOnBlur: {
      type: Boolean,
      default: true,
    },
    /**
     * Sets the initial uncontrolled values rendered by the component.
     */
    defaultValue: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * Sets the `id` of the internal text input rendered by the component.
     */
    id: String,
    /**
     * Renders an inline label inside the component container.
     */
    label: [String, Object],
    /**
     * Sets the maximum number of chips that can be created in the component.
     */
    maxChips: {
      type: Number,
      default: null,
    },
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: Array as PropType<string[]>,
      default: undefined,
    },
    /**
     * Sets the name of the hidden input used by the component for form submission.
     */
    name: String,
    /**
     * Sets placeholder text for the internal input of the component.
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * Toggle the readonly state for the component.
     */
    readOnly: Boolean,
    /**
     * Displays remove buttons on chips managed by the component.
     */
    removable: {
      type: Boolean,
      default: true,
    },
    /**
     * Enables chip selection behavior in the component.
     */
    selectable: Boolean,
    /**
     * Sets the separator character used to create chips while typing or pasting in the component.
     */
    separator: {
      type: String,
      default: ',',
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
  },
  emits: [
    /**
     * Event occurs when the component adds a new chip.
     */
    'add',
    /**
     * Event occurs when the value list changes.
     */
    'change',
    /**
     * Event occurs when the internal text input value changes.
     */
    'input',
    /**
     * Event occurs when the component removes a chip.
     */
    'remove',
    /**
     * Event occurs when the selected chip values change.
     */
    'select',
    /**
     * Emit the new value whenever there's a change.
     */
    'update:modelValue',
  ],
  setup(props, { attrs, emit, expose }) {
    const internalValues = ref<string[]>(uniqueValues(props.defaultValue))
    const inputValue = ref('')
    const selectedValues = ref<string[]>([])
    const rootRef = ref<HTMLDivElement>()
    const inputRef = ref<HTMLInputElement>()

    const values = computed(() =>
      props.modelValue !== undefined
        ? uniqueValues(props.modelValue as string[])
        : uniqueValues(internalValues.value)
    )

    watch(values, (newValues) => {
      selectedValues.value = selectedValues.value.filter((item) => newValues.includes(item))
    })

    const emitValuesChange = (nextValues: string[]): void => {
      if (props.modelValue === undefined) {
        internalValues.value = nextValues
      }

      emit('update:modelValue', nextValues)
      emit('change', nextValues)
    }

    const canAddMore = computed(
      () => props.maxChips === null || values.value.length < props.maxChips,
    )

    const add = (rawValue: string): boolean => {
      if (props.disabled || props.readOnly) {
        return false
      }

      const normalizedValue = String(rawValue).trim()
      if (!normalizedValue || values.value.includes(normalizedValue) || !canAddMore.value) {
        return false
      }

      const nextValues = [...values.value, normalizedValue]
      emitValuesChange(nextValues)
      emit('add', normalizedValue)
      return true
    }

    const remove = (valueToRemove: string): boolean => {
      if (props.disabled || props.readOnly) {
        return false
      }

      if (!values.value.includes(valueToRemove)) {
        return false
      }

      const nextValues = values.value.filter((item) => item !== valueToRemove)
      emitValuesChange(nextValues)
      selectedValues.value = selectedValues.value.filter((item) => {
        const wasSelected = item === valueToRemove
        if (wasSelected && selectedValues.value.length !== nextValues.length) {
          emit('select', selectedValues.value.filter((v) => v !== valueToRemove))
        }
        return item !== valueToRemove
      })
      emit('remove', valueToRemove)
      return true
    }

    const createFromInput = (): void => {
      if (add(inputValue.value)) {
        inputValue.value = ''
      }
    }

    const focusLastChip = (): void => {
      if (!rootRef.value) {
        return
      }

      const focusableChips = [
        ...rootRef.value.querySelectorAll<HTMLElement>(
          '[data-coreui-chip-focusable="true"]:not(.disabled)',
        ),
      ]
      if (focusableChips.length === 0) {
        return
      }
      focusableChips[focusableChips.length - 1].focus()
    }

    const handleInputKeydown = (event: KeyboardEvent): void => {
      switch (event.key) {
        case 'Enter': {
          event.preventDefault()
          createFromInput()
          break
        }

        case 'Backspace':
        case 'Delete': {
          if (inputValue.value === '') {
            event.preventDefault()
            focusLastChip()
          }
          break
        }

        case 'ArrowLeft': {
          const target = event.currentTarget as HTMLInputElement
          if (target.selectionStart === 0 && target.selectionEnd === 0) {
            event.preventDefault()
            focusLastChip()
          }
          break
        }

        case 'Escape': {
          inputValue.value = ''
          ;(event.currentTarget as HTMLInputElement).blur()
          break
        }

        // No default
      }
    }

    const handleInputChange = (value: string): void => {
      if (props.disabled || props.readOnly) {
        return
      }

      if (props.separator && value.includes(props.separator)) {
        const parts = value.split(props.separator)
        const chipsToAdd = uniqueValues(parts.slice(0, -1))

        const newChips = chipsToAdd.filter(chip => !values.value.includes(chip))
        const availableSlots = props.maxChips !== null ? props.maxChips - values.value.length : Infinity
        const chipsToEmit = newChips.slice(0, availableSlots)

        if (chipsToEmit.length > 0) {
          const nextValues = [...values.value, ...chipsToEmit]
          chipsToEmit.forEach(chip => emit('add', chip))
          emitValuesChange(nextValues)
        }

        const tail = parts[parts.length - 1] || ''
        inputValue.value = tail
        emit('input', tail)
        return
      }

      inputValue.value = value
      emit('input', value)
    }

    const handlePaste = (event: ClipboardEvent): void => {
      if (props.disabled || props.readOnly || !props.separator) {
        return
      }

      const pastedData = event.clipboardData?.getData('text')
      if (!pastedData?.includes(props.separator)) {
        return
      }

      event.preventDefault()
      const chipsToAdd = uniqueValues(pastedData.split(props.separator))

      const newChips = chipsToAdd.filter(chip => !values.value.includes(chip))
      const availableSlots = props.maxChips !== null ? props.maxChips - values.value.length : Infinity
      const chipsToEmit = newChips.slice(0, availableSlots)

      if (chipsToEmit.length > 0) {
        const nextValues = [...values.value, ...chipsToEmit]
        chipsToEmit.forEach(chip => emit('add', chip))
        emitValuesChange(nextValues)
      }

      inputValue.value = ''
      emit('input', '')
    }

    const handleInputBlur = (event: FocusEvent): void => {
      if (!props.createOnBlur) {
        return
      }

      if ((event.relatedTarget as HTMLElement | null)?.closest('.chip')) {
        return
      }

      createFromInput()
    }

    const handleContainerKeydown = (event: KeyboardEvent): void => {
      if (event.target === inputRef.value) {
        return
      }

      if (event.key.length === 1) {
        inputRef.value?.focus()
      }
    }

    const handleContainerClick = (event: MouseEvent): void => {
      if (event.target === rootRef.value) {
        inputRef.value?.focus()
      }
    }

    const handleSelectedChange = (chipValue: string, selected: boolean): void => {
      selectedValues.value = selected
        ? uniqueValues([...selectedValues.value, chipValue])
        : selectedValues.value.filter((value) => value !== chipValue)
      emit('select', selectedValues.value)
    }

    expose({ rootRef, inputRef })

    return () => {
      const inputSize = Math.max(props.placeholder.length, inputValue.value.length, 1)

      const children = [
        props.label &&
          h(
            'label',
            {
              class: 'chip-input-label',
              for: props.id,
            },
            props.label,
          ),
        ...values.value.map((chipValue) =>
          h(
            CChip,
            {
              ariaRemoveLabel: `Remove ${chipValue}`,
              class: resolveChipClassName(props.chipClassName, chipValue),
              disabled: props.disabled,
              key: chipValue,
              onRemove: () => remove(chipValue),
              onSelectedChange: (selected: boolean) => handleSelectedChange(chipValue, selected),
              removable: Boolean(props.removable && !props.disabled && !props.readOnly),
              selectable: props.selectable,
              selected: selectedValues.value.includes(chipValue),
            },
            {
              default: () => chipValue,
            },
          ),
        ),
        h('input', {
          ref: inputRef,
          type: 'text',
          id: props.id,
          class: 'chip-input-field',
          disabled: props.disabled,
          readonly: Boolean(!props.disabled && props.readOnly),
          placeholder: props.placeholder,
          size: inputSize,
          value: inputValue.value,
          onBlur: handleInputBlur,
          onInput: (event: Event) => handleInputChange((event.target as HTMLInputElement).value),
          onKeydown: handleInputKeydown,
          onPaste: handlePaste,
          onFocus: () => {
            if (selectedValues.value.length > 0) {
              selectedValues.value = []
              emit('select', [])
            }
          },
        }),
        props.name &&
          h('input', {
            type: 'hidden',
            name: props.name,
            value: values.value.join(','),
          }),
      ].filter(Boolean)

      return h(
        'div',
        {
          ref: rootRef,
          class: [
            'chip-input',
            {
              [`chip-input-${props.size}`]: props.size,
              disabled: props.disabled,
            },
            attrs.class,
          ],
          'aria-disabled': props.disabled ? true : undefined,
          'aria-readonly': props.readOnly ? true : undefined,
          onClick: handleContainerClick,
          onKeydown: handleContainerKeydown,
        },
        children,
      )
    }
  },
})

export { CChipInput }
