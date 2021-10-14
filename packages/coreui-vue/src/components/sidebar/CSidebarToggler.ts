import { defineComponent, h } from 'vue'

const CSidebarToggler = defineComponent({
  name: 'CSidebarToggler',
  setup(_, { slots }) {
    return () => h('button', { class: 'sidebar-toggler' }, slots.default && slots.default())
  },
})

export { CSidebarToggler }
