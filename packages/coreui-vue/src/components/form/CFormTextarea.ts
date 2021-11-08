import { defineComponent, h } from 'vue'

const CFormTextarea = defineComponent({
  name: 'CFormTextarea',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
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
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
     */
    plainText: {
      type: Boolean,
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
     * Set component validation state to valid.
     */
    valid: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    /**
     * Event occurs when the element loses focus, after the content has been changed.
     */
    'change',
    /**
     * Event occurs immediately after the value of a component has changed.
     */
    'input',
    /**
     * Emit the new value whenever there’s an input or change event.
     */
    'update:modelValue',
  ],
  setup(props, { emit, slots }) {
    const handleInput = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('input', event)
      emit('update:modelValue', target.value)
    }

    return () =>
      h(
        'textarea',
        {
          disabled: props.disabled,
          readonly: props.readonly,
          class: [
            props.plainText ? 'form-control-plaintext' : 'form-control',
            {
              'is-invalid': props.invalid,
              'is-valid': props.valid,
            },
          ],
          onInput: (event: InputEvent) => handleInput(event),
          value: props.modelValue,
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormTextarea }
