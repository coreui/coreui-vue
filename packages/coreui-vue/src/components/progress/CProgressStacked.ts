import { defineComponent, h, provide } from 'vue'

const CProgressStacked = defineComponent({
  name: 'CProgressStacked',
  props: {},
  setup(_, { slots }) {
    provide('stacked', true)
    return () =>
      h(
        'div',
        {
          class: 'progress-stacked',
        },
        slots.default && slots.default(),
      )
  },
})

export { CProgressStacked }
