import { defineComponent, h, inject, Ref } from 'vue'

import { CConditionalTeleport } from '../conditional-teleport'
import { getAlignmentClassNames } from './utils'

const CDropdownMenu = defineComponent({
  name: 'CDropdownMenu',
  inheritAttrs: false,
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @values 'div', 'ul'
     */
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { attrs, slots }) {
    const dropdownMenuRef = inject('dropdownMenuRef') as Ref<HTMLElement>
    const config = inject('config') as any // eslint-disable-line @typescript-eslint/no-explicit-any
    const visible = inject('visible') as Ref<boolean>

    const { alignment, container, dark, popper, teleport } = config

    return () =>
      h(
        CConditionalTeleport,
        {
          container: container,
          teleport: teleport,
        },
        {
          default: () =>
            h(
              props.as,
              {
                ...attrs,
                class: [
                  'dropdown-menu',
                  { show: visible.value },
                  getAlignmentClassNames(alignment),
                  attrs.class,
                ],
                ...((typeof alignment === 'object' || !popper) && {
                  'data-coreui-popper': 'static',
                }),
                ...(dark && { 'data-coreui-theme': 'dark' }),
                ref: dropdownMenuRef,
              },
              props.as === 'ul'
                ? slots.default && slots.default().map((vnode) => h('li', {}, vnode))
                : slots.default && slots.default(),
            ),
        },
      )
  },
})

export { CDropdownMenu }
