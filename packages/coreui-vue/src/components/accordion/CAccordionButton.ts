import { defineComponent, h, inject, Ref } from 'vue'

const CAccordionButton = defineComponent({
  name: 'CAccordionButton',
  setup(_, { slots }) {
    const toggleVisibility = inject('toggleVisibility') as () => void
    const visible = inject('visible') as Ref<boolean>

    return () =>
      h(
        'button',
        {
          type: 'button',
          'aria-expanded': !visible.value,
          class: ['accordion-button', { ['collapsed']: !visible.value }],
          onClick: () => toggleVisibility(),
        },
        slots.default && slots.default(),
      )
  },
})

export { CAccordionButton }
