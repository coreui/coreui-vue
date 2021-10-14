import { defineComponent, h } from 'vue'

const CCardTitle = defineComponent({
  name: 'CCardTitle',
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
    return () => h(props.component, { class: 'card-title' }, slots.default && slots.default())
  },
})

export { CCardTitle }
