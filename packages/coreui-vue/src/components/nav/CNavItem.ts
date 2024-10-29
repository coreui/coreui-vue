import { defineComponent, h } from 'vue'
import { CNavLink } from './CNavLink'

import type { ComponentProps } from '../../utils/ComponentProps'

interface CNavItemProps extends ComponentProps<typeof CNavLink> {
  as: string
}

const CNavItem = defineComponent({
  name: 'CNavItem',
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
      default: 'li',
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
  setup(props: CNavItemProps, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: 'nav-item',
        },
        props.href
          ? h(
              CNavLink,
              {
                active: props.active,
                disabled: props.disabled,
                href: props.href,
              },
              {
                default: () => slots.default && slots.default(),
              },
            )
          : slots.default && slots.default(),
      )
  },
})

export { CNavItem }
