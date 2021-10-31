import { defineComponent, h } from 'vue'

const CNavGroupItems = defineComponent({
  name: 'CNavGroupItems',
  setup(_, { slots }) {
    return () => h('ul', { class: 'nav-group-items' }, slots.default && slots.default())
  },
})

export { CNavGroupItems }
