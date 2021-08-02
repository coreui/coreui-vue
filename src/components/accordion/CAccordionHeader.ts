import { defineComponent, h } from 'vue'

const CAccordionHeader = defineComponent({
  name: 'CAccordionHeader',
  setup(_, { slots }) {
    return () => h('div', { class: ['accordion-header'] }, slots.default && slots.default())
  },
})

export { CAccordionHeader }
