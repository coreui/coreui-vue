import { defineComponent, h } from 'vue'

const CHeaderDivider = defineComponent({
  name: 'CHeaderDivider',
  setup(_, { slots }) {
    return () => h('div', { class: 'header-divider' }, slots.default && slots.default())
  },
})

export { CHeaderDivider }
