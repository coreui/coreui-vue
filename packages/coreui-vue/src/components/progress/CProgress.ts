import { defineComponent, h } from 'vue'

import { CProgressBar } from './CProgressBar'

const CProgress = defineComponent({
  name: 'CProgress',
  props: {
    /**
     * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
     */
    height: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * Makes progress bar thinner.
     */
    thin: Boolean,
    /**
     * Change the default color to white.
     */
    white: Boolean,
    ...CProgressBar.props,
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            'progress',
            {
              'progress-thin': props.thin,
              'progress-white': props.white,
            },
          ],
          ...(props.height, { style: `height: ${props.height}px` }),
        },
        props.value
          ? h(
              CProgressBar,
              {
                value: props.value,
                animated: props.animated,
                color: props.color,
                variant: props.variant,
              },
              slots.default && slots.default(),
            )
          : slots.default && slots.default(),
      )
  },
})

export { CProgress }
