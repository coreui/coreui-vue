import { defineComponent, h } from 'vue'

const CHeaderNav = defineComponent({
  name: 'CHeaderNav',
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
          class: 'header-nav',
          role: 'navigation',
        },
        slots.default && slots.default(),
      )
  },
})

export { CHeaderNav }
