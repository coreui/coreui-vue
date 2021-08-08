import { defineComponent, h } from 'vue'

const CSidebarBrand = defineComponent({
  name: 'CSidebarBrand',
  setup(_, { slots }) {
    return () => h('div', { class: 'sidebar-brand' }, slots.default && slots.default())
  },
})

export { CSidebarBrand }
