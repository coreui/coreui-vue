import { defineComponent, h } from 'vue'

import { Color } from '../props'

const CProgressBar = defineComponent({
  name: 'CProgressBar',
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
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * The percent to progress the ProgressBar.
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
      default: undefined,
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
          class: [
            'progress-bar',
            `bg-${props.color}`,
            {
              [`progress-bar-${props.variant}`]: props.variant,
              ['progress-bar-animated']: props.animated,
            },
          ],
          role: 'progressbar',
          style: `width: ${props.value}%`,
          'aria-valuenow': props.value,
          'aria-valuemin': '0',
          'aria-valuemax': '100',
        },
        slots.default && slots.default(),
      )
  },
})

export { CProgressBar }
