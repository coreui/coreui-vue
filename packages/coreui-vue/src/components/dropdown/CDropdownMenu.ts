import { defineComponent, h, inject, onUnmounted, onUpdated, Ref } from 'vue'

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
    const dropdownToggleRef = inject('dropdownToggleRef') as Ref<HTMLElement>
    const dropdownMenuRef = inject('dropdownMenuRef') as Ref<HTMLElement>
    const config = inject('config') as any // eslint-disable-line @typescript-eslint/no-explicit-any
    const hideMenu = inject('hideMenu') as () => void
    const visible = inject('visible') as Ref<boolean>

    const { autoClose, alignment, dark, popper } = config

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

    const handleKeyup = (event: KeyboardEvent) => {
      if (autoClose === false) {
        return
      }

      if (event.key === 'Escape') {
        hideMenu()
      }
    }

    const handleMouseUp = (event: Event) => {
      if (dropdownToggleRef.value?.contains(event.target as HTMLElement)) {
        return
      }

      if (autoClose === true) {
        hideMenu()
        return
      }

      if (autoClose === 'inside' && dropdownMenuRef.value?.contains(event.target as HTMLElement)) {
        hideMenu()
        return
      }

      if (
        autoClose === 'outside' &&
        !dropdownMenuRef.value?.contains(event.target as HTMLElement)
      ) {
        hideMenu()
      }
    }

    onUpdated(() => {
      visible.value && window.addEventListener('mouseup', handleMouseUp)
      visible.value && window.addEventListener('keyup', handleKeyup)
    })

    onUnmounted(() => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('keyup', handleKeyup)
    })

    return () =>
      h(
        props.component,
        {
          class: [
            'dropdown-menu',
            { 'dropdown-menu-dark': dark, show: visible.value },
            alignmentClassNames(alignment),
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
