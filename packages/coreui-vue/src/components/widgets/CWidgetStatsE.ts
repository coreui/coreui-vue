import { defineComponent, h } from 'vue'

import { CCard, CCardBody } from '../card/'

const CWidgetStatsE = defineComponent({
  name: 'CWidgetStatsE',
  props: {
    /**
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: String,
    /**
     * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
     */
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  /**
   * Location for chart component.
   *
   * @slot chart
   */
  setup(props, { slots }) {
    return () =>
      h(CCard, {}, () =>
        h(
          CCardBody,
          {
            class: 'text-center',
          },
          () => [
            (props.title || slots.title) &&
              h(
                'div',
                {
                  class: 'text-body-secondary small text-uppercase font-weight-bold',
                },
                {
                  default: () => (slots.title && slots.title()) || props.title,
                },
              ),
            (props.value || slots.value) &&
              h(
                'div',
                {
                  class: 'h2 py-3',
                },
                {
                  default: () => (slots.value && slots.value()) || props.value,
                },
              ),
            slots.chart && slots.chart(),
            slots.default && slots.default(),
          ],
        ),
      )
  },
})

export { CWidgetStatsE }
