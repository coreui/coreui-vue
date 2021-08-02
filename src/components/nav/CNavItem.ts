import { defineComponent, h } from 'vue'

import { CNavLink } from './CNavLink'

const CNavItem = defineComponent({
  name: 'CNavItem',
  props: {
    ...CNavLink.props,
  },
  setup(props, { slots }) {
    const children = () =>
      props.href
        ? h(
            CNavLink,
            {
              active: props.active,
              component: props.component,
              disabled: props.disabled,
              href: props.href,
              to: props.to,
            },
            slots.default && slots.default(),
          )
        : slots.default && slots.default()
    return () =>
      h(
        'li',
        {
          class: 'nav-item',
        },
        children(),
      )
  },
})

export { CNavItem }
