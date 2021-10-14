import { defineComponent, h } from 'vue'

const CHeaderToggler = defineComponent({
  name: 'CHeaderToggler',
  setup(_, { slots }) {
    return () =>
      h(
        'button',
        {
          class: 'header-toggler',
          type: 'button',
          'aria-label': 'Toggle navigation',
        },
        slots.default ? slots.default() : h('span', { class: ['header-toggler-icon'] }),
      )
  },
})

export { CHeaderToggler }
