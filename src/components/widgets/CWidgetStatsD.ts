import { defineComponent, h, PropType } from 'vue'

import { Color } from '../props'
import { CCard, CCardBody, CCardHeader } from './../card/'
import { CCol } from './../grid/'

const CWidgetStatsD = defineComponent({
  name: 'CWidgetStatsD',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: Color,
    /**
     * Values and titles for your component.
     */
    values: {
      type: Array as PropType<number[] | string[]>,
      default: () => [],
      require: false,
    },
  },
    /**
   * Location for icon component, ex. `<CDropdown>`.
   *
   * @slot icon
   */
  /**
   * Location for chart component.
   *
   * @slot chart
   */
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
              () => [slots.icon && slots.icon(), slots.chart && slots.chart()],
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
                          h(CCol, { class: 'fs-5 fw-semibold' }, () => value[0]),
                          h(
                            CCol,
                            { class: 'text-uppercase text-medium-emphasis small' },
                            () => value[1],
                          ),
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

export { CWidgetStatsD }
