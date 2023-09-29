import { defineComponent, h, inject } from 'vue'

import { Color } from '../../props'

const CProgressBar = defineComponent({
  name: 'CProgressBar',
  props: {
    /**
     * Use to animate the stripes right to left via CSS3 animations.
     */
    animated: Boolean,
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
      default: 0,
    },
    /**
     * Set the progress bar variant to optional striped.
     *
     * @values 'striped'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return value === 'striped'
      },
    },
  },
  setup(props, { slots }) {
    const stacked = inject('stacked', false) as boolean

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
          ...(!stacked && { style: { width: `${props.value}%` } }),
        },
        slots.default && slots.default(),
      )
  },
})

export { CProgressBar }
