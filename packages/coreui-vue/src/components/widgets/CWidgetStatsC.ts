import { defineComponent, h } from 'vue'
import { shape } from 'vue-types'

import { Color } from '../props'
import { CCard, CCardBody } from './../card'
import { CProgress } from '../progress/CProgress'

const CWidgetStatsC = defineComponent({
  name: 'CWidgetStatsC',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Colors have been inverted from their default dark shade.
     */
    inverse: {
      type: Boolean,
      default: undefined,
      require: false,
    },
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
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: {
      type: String,
      default: undefined,
      require: false,
    },
    /**
     * Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>`
     */
    value: {
      type: [Number, String],
      default: 0,
      require: false,
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
        {
          class: [
            {
              ['text-white']: props.inverse,
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
              slots.icon &&
                h(
                  'div',
                  {
                    class: [
                      'text-end mb-4',
                      props.inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis',
                    ],
                  },
                  slots.icon && slots.icon(),
                ),
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
                  {
                    class: [
                      'text-uppercase fw-semibold small',
                      props.inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis',
                    ],
                  },
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
            ],
          ),
      )
  },
})

export { CWidgetStatsC }
