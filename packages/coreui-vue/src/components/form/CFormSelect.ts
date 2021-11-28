import { defineComponent, h, PropType } from 'vue'

type Option = {
  disabled?: boolean
  label?: string
  value?: string
}

const CFormSelect = defineComponent({
  name: 'CFormSelect',
  props: {
    /**
     * Specifies the number of visible options in a drop-down list.
     */
    htmlSize: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * Set component validation state to invalid.
     */
    invalid: {
      type: Boolean,
      required: false,
    },
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: String,
      default: undefined,
      require: false,
    },
    /**
     * Options list of the select component. Available keys: `label`, `value`, `disabled`.
     * Examples:
     * - `:options="[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]"`
     * - `:options="['js', 'html']"`
     */
    options: {
      type: Array as PropType<Option[] | string[]>,
      default: undefined,
      required: false,
    },
    /**
     * Size the component small or large.
     *
     * @values 'sm' | 'lg'
     */
    size: {
      type: String,
      default: undefined,
      require: false,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Set component validation state to valid.
     */
    valid: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    /**
     * Event occurs when when a user changes the selected option of a `<select>` element.
     */
    'change',
    /**
     * Emit the new value whenever there’s a change event.
     */
    'update:modelValue',
  ],
  setup(props, { emit, slots }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLSelectElement
      const selected = Array.from(target.options)
        .filter((option) => option.selected)
        .map((option) => option.value)
      const value = target.multiple ? selected : selected[0]
      emit('change', event)
      emit('update:modelValue', value)
    }

    return () =>
      h(
        'select',
        {
          class: [
            'form-select',
            {
              [`form-select-${props.size}`]: props.size,
              'is-invalid': props.invalid,
              'is-valid': props.valid,
            },
          ],
          onChange: (event: InputEvent) => handleChange(event),
          size: props.htmlSize,
        },
        props.options
          ? props.options.map((option: Option | string) => {
              return h(
                'option',
                {
                  ...(typeof option === 'object' &&
                    option.disabled && { disabled: option.disabled }),
                  ...(typeof option === 'object' && option.value && { value: option.value }),
                },
                typeof option === 'string' ? option : option.label,
              )
            })
          : slots.default && slots.default(),
      )
  },
})

export { CFormSelect }
