import { defineComponent, h } from 'vue'

const CFormLabel = defineComponent({
  name: 'CFormLabel',
  props: {
    /**
     * A string of all className you want to be applied to the component, and override standard className value.
     */
    customClassName: {
      type: [Array, String],
      default: undefined,
      required: false,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'label',
        {
          ...attrs,
          class: props.customClassName ? props.customClassName : 'form-label',
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormLabel }
