import { defineComponent, h } from 'vue'

const CCardBody = defineComponent({
  name: 'CCardBody',
  setup(_, { slots }) {
    return () => h('div', { class: 'card-body' }, slots.default && slots.default())
  },
})
export { CCardBody }
