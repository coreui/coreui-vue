import { defineComponent, h, ref } from 'vue'

const CSidebarNav = defineComponent({
  name: 'CSidebarNav',
  setup(_, { slots }) {
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
        'ul',
        {
          class: 'sidebar-nav',
        },
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
      )
  },
})

export { CSidebarNav }
