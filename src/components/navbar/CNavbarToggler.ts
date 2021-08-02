import { defineComponent, h } from 'vue'

const CNavbarToggler = defineComponent({
  name: 'CNavbarToggler',
  setup(_, { slots }) {
    return () =>
      h(
        'button',
        {
          class: 'navbar-toggler',
        },
        slots.default ? slots.default() : h('span', { class: ['navbar-toggler-icon'] }),
      )
  },
})

export { CNavbarToggler }
