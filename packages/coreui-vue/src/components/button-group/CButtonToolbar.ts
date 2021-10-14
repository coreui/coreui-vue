import { defineComponent, h } from 'vue'

const CButtonToolbar = defineComponent({
  name: 'CButtonToolbar',
  setup(_, { slots }) {
    return () => h('div', { class: 'btn-toolbar' }, slots.default && slots.default())
  },
})
export { CButtonToolbar }
