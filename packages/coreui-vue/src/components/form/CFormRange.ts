import { defineComponent, h } from 'vue'

const CFormRange = defineComponent({
  name: 'CFormRange',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      default: undefined,
      required: false,
    },
    /**
     * Specifies the maximum value for the component.
     */
    max: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * Specifies the minimum value for the component.
     */
    min: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: String,
      value: undefined,
      required: false,
    },
    /**
     * Toggle the readonly state for the component.
     */
    readonly: {
      type: Boolean,
      required: false,
    },
    /**
     * Specifies the interval between legal numbers in the component.
     */
    steps: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * The `value` attribute of component.
     *
     * @controllable onChange
     * */
    value: {
      type: Number,
      default: undefined,
      required: false,
    },
  },
  emits: [
    /**
     * Event occurs when the value has been changed.
     */
    'change',
    /**
     * Emit the new value whenever there’s a change event.
     */
    'update:modelValue',
  ],
  setup(props, { emit, slots }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('change', event)
      emit('update:modelValue', target.value)
    }

    return () =>
      h(
        'input',
        {
          class: 'form-range',
          disabled: props.disabled,
          max: props.max,
          min: props.min,
          onChange: (event: InputEvent) => handleChange(event),
          steps: props.steps,
          readonly: props.readonly,
          type: 'range',
          value: props.modelValue,
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormRange }
