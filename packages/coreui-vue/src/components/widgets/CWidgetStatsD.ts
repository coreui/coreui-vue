import { defineComponent, h, PropType } from 'vue'

import { CCard, CCardBody, CCardHeader } from '../card/'
import { CCol } from '../grid/'

import { Color } from '../../props'

type Value = {
  title?: string
  value?: number | string
}

const CWidgetStatsD = defineComponent({
  name: 'CWidgetStatsD',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Values and titles for your component.
     */
    values: {
      type: Array as PropType<Value[]>,
      default: () => [],
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
                  props.values.map((value: Value, index: number) => [
                    index % 2 !== 0 && h('div', { class: 'vr' }),
                    h(
                      CCol,
                      {},
                      {
                        default: () => [
                          h(CCol, { class: 'fs-5 fw-semibold' }, () => value.value),
                          h(
                            CCol,
                            { class: 'text-uppercase text-body-secondary small' },
                            () => value.title,
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
