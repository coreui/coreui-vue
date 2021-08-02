import { defineComponent, h } from 'vue'

const CAccordionButton = defineComponent({
  name: 'CAccordionButton',
  props: {
    /**
     * Set button state to collapsed.
     */
    collapsed: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'button',
        { class: ['accordion-button', { ['collapsed']: props.collapsed }] },
        slots.default && slots.default(),
      )
  },
})

export { CAccordionButton }
