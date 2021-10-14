import { defineComponent, h } from 'vue'

const CNavTitle = defineComponent({
  name: 'CNavTitle',
  setup(_, { slots }) {
    return () => h('li', { class: 'nav-title' }, slots.default && slots.default())
  },
})

export { CNavTitle }
