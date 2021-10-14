import { defineComponent, h } from 'vue'
import { CAccordionButton } from './CAccordionButton'

const CAccordionHeader = defineComponent({
  name: 'CAccordionHeader',
  setup(_, { slots }) {
    return () =>
      h(
        'div',
        { class: ['accordion-header'] },
        h(
          CAccordionButton,
          {},
          {
            default: () => slots.default && slots.default(),
          },
        ),
      )
  },
})

export { CAccordionHeader }
