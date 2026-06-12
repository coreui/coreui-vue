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
    /**
     * Make navigation more compact by cutting link padding in half.
     *
     * @since 5.9.0
     */
    compact: Boolean,
    /**
     * Sets the navigation variant.
     *
     * @since 5.9.0
     */
    variant: {
      type: String as PropType<'tree'>,
      default: undefined,
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
          class: [
            'sidebar-nav',
            {
              compact: props.compact,
              'sidebar-nav-tree': props.variant === 'tree',
            },
          ],
        },
        {
          default: () => slots.default && slots.default(),
        }
      )
  },
})

export { CSidebarNav }
