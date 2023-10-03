import { defineComponent, h } from 'vue'
import { shape } from 'vue-types'

import { CCard, CCardBody } from '../card'
import { CProgress } from '../progress'

import { Color } from '../../props'

const CWidgetStatsB = defineComponent({
  name: 'CWidgetStatsB',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Colors have been inverted from their default dark shade.
     */
    inverse: Boolean,
    progress: shape({
      /**
       * Sets the color context of the progress bar to one of CoreUI’s themed colors
       *
       * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
       */
      color: Color,
      /**
       * The percent to progress the ProgressBar (out of 100).
       */
      value: {
        type: Number,
        default: 0,
      },
    }),
    /**
     * Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`
     */
    text: String,
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
  setup(props, { slots }) {
    return () =>
      h(
        CCard,
        {
          class: [
            {
              'text-white': props.inverse,
            },
          ],
          color: props.color,
        },
        () =>
          h(
            CCardBody,
            {
              class: 'card-body',
            },
            () => [
              (props.value || slots.value) &&
                h(
                  'div',
                  {
                    class: 'fs-4 fw-semibold',
                  },
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
              h(CProgress, {
                class: 'my-2',
                ...(props.progress && props.progress.color && { color: props.progress.color }),
                height: 4,
                ...(props.progress && props.progress.value && { value: props.progress.value }),
                white: props.inverse,
              }),
              (props.text || slots.text) &&
                h(
                  'small',
                  {
                    class: [props.inverse ? 'text-white text-opacity-75' : 'text-body-secondary'],
                  },
                  {
                    default: () => (slots.text && slots.text()) || props.text,
                  },
                ),
            ],
          ),
      )
  },
})

export { CWidgetStatsB }
