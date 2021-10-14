import { defineComponent, h } from 'vue'

const CCardGroup = defineComponent({
  name: 'CCardGroup',
  setup(_, { slots }) {
    return () => h('div', { class: 'card-group' }, slots.default && slots.default())
  },
})

export { CCardGroup }
