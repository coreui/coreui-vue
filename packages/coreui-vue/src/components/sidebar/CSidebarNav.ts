import { Component, defineComponent, h, ref, PropType } from 'vue'

const CSidebarNav = defineComponent({
  name: 'CSidebarNav',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: [Object, String] as PropType<string | Component>,
      default: 'ul',
    },
  },
  setup(props, { slots }) {
    const visibleGroup = ref()

    const handleVisibleChange = (visible: boolean, index: number) => {
      if (visible) {
        visibleGroup.value = index
      } else {
        if (visibleGroup.value === index) {
          visibleGroup.value = 0
        }
      }
    }

    const isVisible = (index: number) => Boolean(visibleGroup.value === index)

    return () =>
      h(
        props.as,
        {
          class: 'sidebar-nav',
        },
        {
          default: () =>
            slots.default &&
            slots.default().map((vnode, index) => {
              // @ts-expect-error name is defined in component
              if (vnode.type.name === 'CNavGroup') {
                return h(vnode, {
                  onVisibleChange: (visible: boolean) => handleVisibleChange(visible, index + 1),
                  ...(visibleGroup.value && { visible: isVisible(index + 1) }),
                })
              }
              return vnode
            }),
        },
      )
  },
})

export { CSidebarNav }
