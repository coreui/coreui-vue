import { defineComponent, h } from 'vue'
import { CNavLink } from './CNavLink'

import type { ComponentProps } from '../../utils/ComponentProps'

interface CNavItemProps extends ComponentProps<typeof CNavLink> {
  as: string
}

const CNavItem = defineComponent({
  name: 'CNavItem',
  props: {
    ...CNavLink.props,
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'li',
    },
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
