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
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'textarea',
        {
          ...attrs,
          class: [
            props.plainText ? 'form-control-plaintext' : 'form-control',
            {
              'is-invalid': props.invalid,
              'is-valid': props.valid,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormTextarea }
