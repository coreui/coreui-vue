import { defineComponent, h, PropType } from 'vue'

import { CCard, CCardBody, CCardHeader } from './../card/'
import { CCol } from './../grid/'

const CWidgetBrand = defineComponent({
  name: 'CWidgetBrand',
  props: {
    color: {
      type: String,
      default: undefined,
      require: false,
    },
    values: {
      type: Array as PropType<number[] | string[]>,
      default: () => [],
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
              CCardHeader,
              {
                class: [
                  'position-relative d-flex justify-content-center align-items-center',
                  {
                    [`bg-${props.color}`]: props.color,
                  },
                ],
              },
              slots.default && slots.default(),
            ),
            h(
              CCardBody,
              {
                class: 'row text-center',
              },
              {
                default: () =>
                  props.values &&
                  props.values.map((value: number | string, index: number) => [
                    index % 2 !== 0 && h('div', { class: 'vr' }),
                    h(
                      CCol,
                      {},
                      {
                        default: () => [
                          h(CCol, { class: 'fs-5 fw-semibold' }, value[0]),
                          h(CCol, { class: 'text-uppercase text-medium-emphasis small' }, value[1]),
                        ],
                      },
                    ),
                  ]),
              },
            ),
          ],
        },
      )
  },
})

export { CWidgetBrand }
