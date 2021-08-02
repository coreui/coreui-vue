import { defineComponent, h } from 'vue'

const CAccordionItem = defineComponent({
  name: 'CAccordionItem',
  setup(_, { slots }) {
    return () => h('div', { class: ['accordion-item'] }, slots.default && slots.default())
  },
})

export { CAccordionItem }
