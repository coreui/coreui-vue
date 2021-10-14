import { defineComponent, h } from 'vue'

const COffcanvasTitle = defineComponent({
  name: 'COffcanvasTitle',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'h5',
    },
  },
  setup(props, { slots }) {
    return () => h(props.component, { class: 'offcanvas-title' }, slots.default && slots.default())
  },
})

export { COffcanvasTitle }
