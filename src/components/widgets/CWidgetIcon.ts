import { defineComponent, h } from 'vue'

import { CCard, CCardBody, CCardFooter } from './../card/'

const CWidgetIcon = defineComponent({
  name: 'CWidgetIcon',
  props: {
    color: {
      type: String,
      default: undefined,
      require: false,
    },
    iconPadding: Boolean,
    padding: {
      type: Number,
      default: undefined,
      require: false,
    },
    title: {
      type: String,
      default: undefined,
      require: false,
    },
    text: {
      type: String,
      default: undefined,
      require: false,
    },
    value: {
      type: [Number, String],
      default: 0,
      require: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        CCard,
        {},
        {
          default: () => [
            h(
              CCardBody,
              {
                class: [`d-flex align-items-center p-${props.padding}`],
              },
              () => [
                h(
                  'div',
                  {
                    class: [
                      'me-3',
                      'text-white',
                      `bg-${props.color}`,
                      props.iconPadding ? 'p-3' : 'p-4',
                    ],
                  },
                  slots.default && slots.default(),
                ),
                h('div', {}, [
                  props.value &&
                    h(
                      'div',
                      {
                        class: [`fs-6 fw-semibold text-${props.color}`],
                      },
                      props.value,
                    ),
                  props.title &&
                    h(
                      'div',
                      {
                        class: 'text-medium-emphasis text-uppercase fw-semibold small',
                      },
                      props.title,
                    ),
                ]),
              ],
            ),
            slots.footer && h(CCardFooter, {}, () => slots.footer && slots.footer()),
          ],
        },
      )
  },
})

export { CWidgetIcon }
