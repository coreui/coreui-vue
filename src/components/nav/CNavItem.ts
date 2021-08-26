import { defineComponent, h } from 'vue'

import { CNavLink } from './CNavLink'

const CNavItem = defineComponent({
  name: 'CNavItem',
  props: {
    ...CNavLink.props,
  },
  setup(props, { slots }) {
    return () =>
      h(
        'li',
        {
          class: 'nav-item',
        },
        props.href
          ? h(
              CNavLink,
              {
                active: props.active,
                component: props.component,
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
