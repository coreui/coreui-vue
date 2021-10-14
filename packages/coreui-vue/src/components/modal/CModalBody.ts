import { defineComponent, h } from 'vue'

const CModalBody = defineComponent({
  name: 'CModalBody',
  setup(_, { slots }) {
    return () => h('div', { class: 'modal-body' }, slots.default && slots.default())
  },
})

export { CModalBody }
