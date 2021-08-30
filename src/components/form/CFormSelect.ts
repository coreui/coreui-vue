import { defineComponent, h } from 'vue'

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
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'select',
        {
          ...attrs,
          class: [
            'form-select',
            {
              [`form-select-${props.size}`]: props.size,
            },
          ],
          size: props.htmlSize,
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormSelect }
