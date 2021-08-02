import { defineComponent, h } from 'vue'

const CBreadcrumb = defineComponent({
  name: 'CBreadcrumb',
  setup(_, { slots }) {
    return () =>
      h(
        'nav',
        {
          'aria-label': 'breadcrumb',
        },
        h('ol', { class: 'breadcrumb' }, slots.default && slots.default()),
      )
  },
})

export { CBreadcrumb }
