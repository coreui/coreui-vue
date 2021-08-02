import { defineComponent, h } from 'vue'

const CFormInput = defineComponent({
  name: 'CFormInput',
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
     * Specifies the type of component.
     *
     * @values 'color' | 'file' | 'text' | string
     * @default 'text'
     */
    type: {
      type: String,
      default: 'text',
      require: false,
    },
    /**
     * Set component validation state to valid.
     */
    valid: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'input',
        {
          type: props.type,
          ...attrs,
          class: [
            props.plainText ? 'form-control-plaintext' : 'form-control',
            {
              'form-control-color': props.type === 'color',
              [`form-control-${props.size}`]: props.size,
              'is-invalid': props.invalid,
              'is-valid': props.valid,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormInput }
