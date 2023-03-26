import { defineComponent, h, inject, Ref } from 'vue'
import { CCollapse } from '../collapse/CCollapse'

const CAccordionBody = defineComponent({
  name: 'CAccordionBody',
  setup(_, { slots }) {
    const visible = inject('visible') as Ref<boolean>
    return () =>
      h(
        CCollapse,
        { class: 'accordion-collapse', visible: visible.value },
        {
          default: () => h('div', { class: ['accordion-body'] }, slots.default && slots.default()),
        },
      )
  },
})

export { CAccordionBody }
