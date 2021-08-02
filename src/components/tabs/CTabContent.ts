import { defineComponent, h } from 'vue'

const CTabContent = defineComponent({
  name: 'CNavGroupItems',
  setup(_, { slots }) {
    return () => h('div', { class: 'tab-content' }, slots.default && slots.default())
  },
})

export { CTabContent }
