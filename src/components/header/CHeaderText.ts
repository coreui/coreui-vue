import { defineComponent, h } from 'vue'

const CHeaderText = defineComponent({
  name: 'CHeaderText',
  setup(_, { slots }) {
    return () => h('span', { class: 'header-text' }, slots.default && slots.default())
  },
})

export { CHeaderText }
