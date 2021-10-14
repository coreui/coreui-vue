import { defineComponent, h } from 'vue'

import { CLink } from '../link/CLink'

const CNavLink = defineComponent({
  name: 'CNavLink',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: {
      type: Boolean,
      required: false,
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'a',
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * @ignore
     */
    href: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        CLink,
        {
          class: 'nav-link',
          active: props.active,
          component: props.component,
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
