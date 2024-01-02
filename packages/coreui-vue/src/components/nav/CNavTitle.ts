import { defineComponent, h } from 'vue'

const CNavTitle = defineComponent({
  name: 'CNavTitle',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'li',
    },
  },
  setup(props, { slots }) {
    return () => h(props.as, { class: 'nav-title' }, slots.default && slots.default())
  },
})

export { CNavTitle }
