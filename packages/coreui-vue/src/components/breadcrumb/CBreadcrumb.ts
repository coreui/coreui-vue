import { defineComponent, h } from 'vue'

const CBreadcrumb = defineComponent({
  name: 'CBreadcrumb',
  inheritAttrs: false,
  setup(_, { slots, attrs }) {
    return () =>
      h(
        'nav',
        {
          'aria-label': 'breadcrumb',
        },
        h('ol', { class: ['breadcrumb', attrs.class] }, slots.default && slots.default()),
      )
  },
})

export { CBreadcrumb }
