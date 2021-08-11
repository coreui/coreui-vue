import { defineComponent, h } from 'vue'

import { CCard, CCardBody } from './../card'

const CWidgetDropdown = defineComponent({
  name: 'CWidgetDropdown',
  props: {
    color: {
      type: String,
      default: undefined,
      require: false,
    },
    header: {
      type: String,
      default: undefined,
      require: false,
    },
    text: {
      type: String,
      default: undefined,
      require: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        CCard,
        {
          class: [
            { [`bg-${props.color}`]: props.color, 'text-high-emphasis-inverse': props.color },
          ],
        },
        [
          h(
            CCardBody,
            {
              class: 'pb-0 d-flex justify-content-between align-items-start',
            },
            () => [
              h('div', {}, [
                slots.value &&
                  h('div', { class: 'fs-4 fw-semibold' }, [
                    slots.value && slots.value(),
                    slots.change &&
                      h('span', { class: 'fs-6 fw-normal' }, slots.change && slots.change()),
                  ]),
                slots.title && h('div', {}, slots.title && slots.title()),
              ]),
              slots.action && slots.action(),
            ],
          ),
          slots.default && slots.default(),
        ],
      )
  },
})

export { CWidgetDropdown }
