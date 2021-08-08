import { defineComponent, h } from 'vue'

const CSidebarFooter = defineComponent({
  name: 'CSidebarFooter',
  setup(_, { slots }) {
    return () => h('div', { class: 'sidebar-footer' }, slots.default && slots.default())
  },
})

export { CSidebarFooter }
