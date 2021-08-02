import { defineComponent, h } from 'vue'

const COffcanvasBody = defineComponent({
  name: 'COffcanvasBody',
  setup(_, { slots }) {
    return () => h('div', { class: 'offcanvas-body' }, slots.default && slots.default())
  },
})

export { COffcanvasBody }
