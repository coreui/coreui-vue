import { defineComponent, h } from 'vue'
import { CFormLabel } from './CFormLabel'

const CFormRange = defineComponent({
  name: 'CFormRange',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * Add a caption for a component.
     *
     * @since 4.3.0
     */
    label: String,
    /**
     * Specifies the maximum value for the component.
     */
    max: Number,
    /**
     * Specifies the minimum value for the component.
     */
    min: Number,
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: String,
    /**
     * Toggle the readonly state for the component.
     */
    readonly: Boolean,
    /**
     * Specifies the interval between legal numbers in the component.
     */
    steps: Number,
    /**
     * The `value` attribute of component.
     *
     * @controllable onChange
     * */
    value: Number,
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
  setup(props, { attrs, emit, slots }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('change', event)
      emit('update:modelValue', target.value)
    }

    return () => [
      props.label &&
        h(
          CFormLabel,
          {
            for: attrs.id,
          },
          {
            default: () => (slots.label && slots.label()) || props.label,
          },
        ),
      h(
        'input',
        {
          ...attrs,
          class: 'form-range',
          disabled: props.disabled,
          max: props.max,
          min: props.min,
          onChange: (event: InputEvent) => handleChange(event),
          readonly: props.readonly,
          steps: props.steps,
          type: 'range',
          value: props.modelValue,
        },
        slots.default && slots.default(),
      ),
    ]
  },
})

export { CFormRange }
