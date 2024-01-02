import { defineComponent, h } from 'vue'

const CNavbarNav = defineComponent({
  name: 'CNavbarNav',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'ul',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: 'navbar-nav',
          role: 'navigation',
        },
        slots.default && slots.default(),
      )
  },
})

export { CNavbarNav }
