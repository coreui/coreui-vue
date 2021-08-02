import { defineComponent, h } from 'vue'

const CInputGroupText = defineComponent({
  name: 'CInputGroupText',
  setup(_, { slots }) {
    return () => h('span', { class: 'input-group-text' }, slots.default && slots.default())
  },
})

export { CInputGroupText }
