import { defineComponent, h } from 'vue'

const CNavbarText = defineComponent({
  name: 'CNavbarText',
  setup(_, { slots }) {
    return () => h('span', { class: 'navbar-text' }, slots.default && slots.default())
  },
})

export { CNavbarText }
