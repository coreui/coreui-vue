import { defineComponent, h } from 'vue'

import { CCard, CCardBody } from '../card'

const CWidgetStatsA = defineComponent({
  name: 'CWidgetStatsA',
  props: {
    color: {
      type: String,
      default: undefined,
      require: false,
    },
    /**
     * Title node for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: {
      type: String,
      default: undefined,
      require: false,
    },
    /**
     * Value node for your component. If you want to pass non-string value please use dedicated slot `<template #value>...</template>`
     */
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
        {
          class: [
            { [`bg-${props.color}`]: props.color, 'text-high-emphasis-inverse': props.color },
          ],
        },
        () => [
          h(
            CCardBody,
            {
              class: 'pb-0 d-flex justify-content-between align-items-start',
            },
            () => [
              h('div', {}, [
                (props.value || slots.value) &&
                  h(
                    'div',
                    { class: 'fs-4 fw-semibold' },
                    {
                      default: () => (slots.value && slots.value()) || props.value,
                    },
                  ),
                (props.title || slots.title) &&
                  h(
                    'div',
                    {},
                    {
                      default: () => (slots.title && slots.title()) || props.title,
                    },
                  ),
              ]),
              slots.action && slots.action(),
            ],
          ),
          slots.chart && slots.chart(),
          slots.default && slots.default(),
        ],
      )
  },
})

export { CWidgetStatsA }
