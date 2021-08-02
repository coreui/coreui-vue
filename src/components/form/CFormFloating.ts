import { defineComponent, h } from 'vue'

const CFormFloating = defineComponent({
  name: 'CFormFloating',
  setup(_, { slots }) {
    return () =>
      h(
        'div',
        {
          class: 'form-floating',
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormFloating }
