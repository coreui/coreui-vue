import { defineComponent, h } from 'vue'

const CSidebarHeader = defineComponent({
  name: 'CSidebarHeader',
  setup(_, { slots }) {
    return () => h('div', { class: 'sidebar-header' }, slots.default && slots.default())
  },
})

export { CSidebarHeader }
