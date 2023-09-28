import { defineComponent, h, inject, Ref } from 'vue'

import { getAlignmentClassNames } from './utils'

const CDropdownMenu = defineComponent({
  name: 'CDropdownMenu',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @values 'div', 'ul'
     */
    component: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const dropdownMenuRef = inject('dropdownMenuRef') as Ref<HTMLElement>
    const config = inject('config') as any // eslint-disable-line @typescript-eslint/no-explicit-any
    const visible = inject('visible') as Ref<boolean>

    const { alignment, dark, popper } = config

    return () =>
      h(
        props.component,
        {
          class: [
            'dropdown-menu',
            { 'dropdown-menu-dark': dark, show: visible.value },
            getAlignmentClassNames(alignment),
          ],
          ...((typeof alignment === 'object' || !popper) && {
            'data-coreui-popper': 'static',
          }),
          ref: dropdownMenuRef,
        },
        props.component === 'ul'
          ? slots.default && slots.default().map((vnode) => h('li', {}, vnode))
          : slots.default && slots.default(),
      )
  },
})

export { CDropdownMenu }
