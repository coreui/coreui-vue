import { defineComponent, h } from 'vue'

const CModalTitle = defineComponent({
  name: 'CModalTitle',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: 'h5',
      required: false,
    },
  },
  setup(props, { slots }) {
    return () => h(props.component, { class: 'modal-title' }, slots.default && slots.default())
  },
})

export { CModalTitle }
