import { defineComponent, h } from 'vue'

const CFormLabel = defineComponent({
  name: 'CFormLabel',
  props: {
    /**
     * A string of all className you want to be applied to the component, and override standard className value.
     */
    customClassName: [Array, String],
  },
  setup(props, { slots }) {
    return () =>
      h(
        'label',
        {
          class: props.customClassName ?? 'form-label',
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormLabel }
