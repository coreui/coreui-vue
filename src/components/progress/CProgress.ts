import { defineComponent, h } from 'vue'

import { CProgressBar } from './CProgressBar'

const CProgress = defineComponent({
  name: 'CProgress',
  props: {
    /**
     * Use to animate the stripes right to left via CSS3 animations.
     */
    animated: {
      type: Boolean,
      required: false,
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @default 'primary'
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: {
      type: String,
      default: 'primary',
      require: false,
      validator: (value: string) => {
        return [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'dark',
          'light',
        ].includes(value)
      },
    },
    // TODO: check how to use defualt HTMLAttributes
    /**
     * Set the height of component.
     */
    height: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * The percent to progress the ProgressBar.
     *
     * @default 0
     */
    value: {
      type: Number,
      required: false,
      default: 0,
    },
    /**
     * Set the progress bar variant to optional striped.
     *
     * @values 'striped'
     */
    variant: {
      type: String,
      default: 'primary',
      require: false,
      validator: (value: string) => {
        return value === 'striped'
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: 'progress',
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
