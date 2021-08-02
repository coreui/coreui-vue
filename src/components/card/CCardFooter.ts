import { defineComponent, h } from 'vue'

const CCardFooter = defineComponent({
  name: 'CCardFooter',
  setup(_, { slots }) {
    return () => h('div', { class: 'card-footer' }, slots.default && slots.default())
  },
})

export { CCardFooter }
