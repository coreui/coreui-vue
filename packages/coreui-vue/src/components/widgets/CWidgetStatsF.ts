import { defineComponent, h } from 'vue'

import { CCard, CCardBody, CCardFooter } from '../card/'

import { Color } from '../../props'

const CWidgetStatsF = defineComponent({
  name: 'CWidgetStatsF',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Set padding of your component.
     */
    padding: {
      type: Boolean,
      default: true,
    },
    /**
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: String,
    /**
     * Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`
     */
    text: String,
    /**
     * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
     */
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  /**
   * Location for icon component.
   *
   * @slot icon
   */
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
                class: ['d-flex align-items-center', props.padding === false && 'p-0'],
              },
              () => [
                h(
                  'div',
                  {
                    class: [
                      'me-3',
                      'text-white',
                      `bg-${props.color}`,
                      props.padding ? 'p-3' : 'p-4',
                    ],
                  },
                  (slots.default && slots.default()) || (slots.icon && slots.icon()),
                ),
                h('div', {}, [
                  (props.value || slots.value) &&
                    h(
                      'div',
                      {
                        class: [`fs-6 fw-semibold text-${props.color}`],
                      },
                      {
                        default: () => (slots.value && slots.value()) || props.value,
                      },
                    ),
                  (props.title || slots.title) &&
                    h(
                      'div',
                      {
                        class: 'text-body-secondary text-uppercase fw-semibold small',
                      },
                      {
                        default: () => (slots.title && slots.title()) || props.title,
                      },
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

export { CWidgetStatsF }
