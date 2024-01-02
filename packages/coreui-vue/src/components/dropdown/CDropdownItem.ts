import { defineComponent, h } from 'vue'

import { CLink } from '../link/CLink'

const CDropdownItem = defineComponent({
  name: 'CDropdownItem',
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
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: String,
  },
  setup(props, { slots }) {
    return () =>
      h(
        CLink,
        {
          class: 'dropdown-item',
          active: props.active,
          as: props.as,
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
