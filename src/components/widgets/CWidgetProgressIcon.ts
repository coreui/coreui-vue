import { defineComponent, h } from 'vue'

import { CCard, CCardBody } from './../card'
import { CProgress } from '../progress/CProgress'

const CWidgetProgressIcon = defineComponent({
  name: 'CWidgetProgressIcon',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: {
      type: String,
      default: undefined,
      require: false,
    },
    inverse: {
      type: Boolean,
      default: undefined,
      require: false,
    },
    /**
     * Sets the color context of the progress bar to one of CoreUI’s themed colors. [docs]
     *
     * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    progressColor: {
      type: String,
      default: undefined,
      require: false,
    },
    progressValue: {
      type: Number,
      default: 0,
      require: false,
    },
    title: {
      type: String,
      default: undefined,
      require: false,
    },
    value: {
      type: Number,
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
            {
              ['text-white']: props.inverse,
            },
          ],
          color: props.color,
        },
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
            props.value &&
              h(
                'div',
                {
                  class: 'fs-4 fw-semibold',
                },
                {
                  default: () => props.value,
                },
              ),
            props.title &&
              h(
                'div',
                {
                  class: [
                    'text-uppercase fw-semibold small',
                    props.inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis',
                  ],
                },
                {
                  default: () => props.title,
                },
              ),
            h(CProgress, {
              class: 'my-2',
              color: props.progressColor,
              height: 4,
              value: props.progressValue,
              white: props.inverse,
            }),
          ],
        ),
      )
  },
})

export { CWidgetProgressIcon }
