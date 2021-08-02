import { defineComponent, h } from 'vue'

const CModalFooter = defineComponent({
  name: 'CModalFooter',
  setup(_, { slots }) {
    return () => h('div', { class: 'modal-footer' }, slots.default && slots.default())
  },
})

export { CModalFooter }
