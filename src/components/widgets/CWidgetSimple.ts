import { defineComponent, h } from 'vue'

import { CCard, CCardBody } from './../card/'

const CWidgetSimple = defineComponent({
  name: 'CWidgetSimple',
  props: {
    title: {
      type: String,
      default: undefined,
      require: false,
    },
    value: {
      type: [Number, String],
      default: undefined,
      require: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        CCard,
        {},
        h(
          CCardBody,
          {
            class: 'text-center',
          },
          () => [
            props.title &&
              h(
                'div',
                {
                  class: 'text-muted small text-uppercase font-weight-bold',
                },
                {
                  default: () => props.title,
                },
              ),
            props.value &&
              h(
                'div',
                {
                  class: 'h2 py-3',
                },
                {
                  default: () => props.value,
                },
              ),
            slots.default && slots.default(),
          ],
        ),
      )
  },
})

export { CWidgetSimple }
