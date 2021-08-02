import { defineComponent, h } from 'vue'
import { CCollapse } from '../collapse/CCollapse'

const CAccordionCollapse = defineComponent({
  name: 'CAccordionCollapse',
  props: {
    /**
     * Toggle the visibility of component.
     */
    visible: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        CCollapse,
        {
          class: 'accordion-collapse',
          visible: props.visible,
        },
        slots.default && slots.default(),
      )
  },
})

export { CAccordionCollapse }
