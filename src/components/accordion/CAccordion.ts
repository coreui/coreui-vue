import { defineComponent, h } from 'vue'

const CAccordion = defineComponent({
  name: 'CAccordion',
  props: {
    /**
     * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
     */
    flush: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        { class: ['accordion', { ['accordion-flush']: props.flush }] },
        slots.default && slots.default(),
      )
  },
})

export { CAccordion }
