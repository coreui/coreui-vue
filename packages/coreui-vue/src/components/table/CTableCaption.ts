import { defineComponent, h } from 'vue'

const CTableCaption = defineComponent({
  name: 'CTableCaption',
  props: {},
  setup(_, { slots }) {
    return () => h('caption', {}, slots.default && slots.default())
  },
})

export { CTableCaption }
