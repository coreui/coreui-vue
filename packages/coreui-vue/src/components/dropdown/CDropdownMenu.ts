import { defineComponent, h, inject, toRefs, Ref } from 'vue'

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
      required: false,
    },
  },
  setup(props, { slots }) {
    const dropdownMenuRef = inject('dropdownMenuRef') as Ref<HTMLElement>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config = inject('config') as any

    const { alignment, dark, popper, visible } = toRefs(config)

    // eslint-disable-next-line @typescript-eslint/ban-types
    const alignmentClassNames = (alignment: object | string) => {
      const classNames: string[] = []
      if (typeof alignment === 'object') {
        Object.keys(alignment).map((key) => {
          classNames.push(`dropdown-menu${key === 'xs' ? '' : `-${key}`}-${alignment[key]}`)
        })
      }
      if (typeof alignment === 'string') {
        classNames.push(`dropdown-menu-${alignment}`)
      }
      return classNames
    }

    return () =>
      h(
        props.component,
        {
          class: [
            'dropdown-menu',
            { 'dropdown-menu-dark': dark.value, show: visible.value },
            alignmentClassNames(alignment.value),
          ],
          ...((typeof alignment.value === 'object' || !popper.value) && {
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
