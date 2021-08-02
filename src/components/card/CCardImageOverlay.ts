import { defineComponent, h } from 'vue'

const CCardImageOverlay = defineComponent({
  name: 'CCardImageOverlay',
  setup(_, { slots }) {
    return () => h('div', { class: 'card-img-overlay' }, slots.default && slots.default())
  },
})
export { CCardImageOverlay }
