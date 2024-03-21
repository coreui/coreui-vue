import { defineComponent, h } from 'vue'

import { CLink } from '../link/CLink'

const CNavLink = defineComponent({
  name: 'CNavLink',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'a',
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * @ignore
     */
    href: String,
  },
  setup(props, { slots }) {
    return () =>
      h(
        CLink,
        {
          as: props.as,
          active: props.active,
          class: 'nav-link',
          disabled: props.disabled,
          href: props.href,
        },
        {
          default: () => slots.default && slots.default(),
        },
      )
  },
})

export { CNavLink }
