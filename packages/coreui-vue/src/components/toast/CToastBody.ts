import { defineComponent, h } from 'vue'

const CToastBody = defineComponent({
  name: 'CToastBody',
  setup(_, { slots }) {
    return () => h('div', { class: 'toast-body' }, slots.default && slots.default())
  },
})

export { CToastBody }
