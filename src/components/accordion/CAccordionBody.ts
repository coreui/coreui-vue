import { defineComponent, h } from 'vue'

const CAccordionBody = defineComponent({
  name: 'CAccordionBody',
  setup(_, { slots }) {
    return () => h('div', { class: ['accordion-body'] }, slots.default && slots.default())
  },
})

export { CAccordionBody }
