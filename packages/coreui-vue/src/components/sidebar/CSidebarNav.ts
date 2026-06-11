import { Component, defineComponent, h, provide, ref, PropType } from 'vue'

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
    const activeGroupKey = ref<string>()
    provide('cNavGroupActiveKey', activeGroupKey)
    provide('cNavGroupSetActiveKey', (value?: string) => {
      activeGroupKey.value = value
    })

    return () =>
      h(
        props.as,
        {
          class: 'sidebar-nav',
        },
        {
          default: () => slots.default && slots.default(),
        },
      )
  },
})

export { CSidebarNav }
