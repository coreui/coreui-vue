import { defineComponent, h } from 'vue'

const COffcanvasHeader = defineComponent({
  name: 'COffcanvasHeader',
  setup(_, { slots }) {
    return () => h('div', { class: 'offcanvas-header' }, slots.default && slots.default())
  },
})

export { COffcanvasHeader }
