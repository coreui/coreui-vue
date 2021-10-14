import { defineComponent, h } from 'vue'

import { CLink } from '../link/CLink'

const CDropdownItem = defineComponent({
  name: 'CDropdownItem',
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
      default: 'a',
      required: false,
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * The href attribute specifies the URL of the page the link goes to.
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
          class: 'dropdown-item',
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

export { CDropdownItem }
