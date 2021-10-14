import { defineComponent, h } from 'vue'

export const CAlertLink = defineComponent({
  name: 'CAlertLink',
  setup(_, { slots }) {
    return () =>
      h(
        'a',
        {
          class: 'alert-link',
        },
        slots,
      )
  },
})
