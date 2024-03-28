import { defineComponent, h, inject } from 'vue'

import { CProgressBar } from './CProgressBar'
import { Color } from '../../props'

const CProgress = defineComponent({
  name: 'CProgress',
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
     * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
     */
    height: Number,
    /**
     * A string of all className you want applied to the <CProgressBar/> component.
     *
     * @since 5.0.0
     */
    progressBarClassName: String,
    /**
     * Makes progress bar thinner.
     */
    thin: Boolean,
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
    /**
     * Change the default color to white.
     */
    white: Boolean,
  },
  setup(props, { slots }) {
    const stacked = inject('stacked', false) as boolean

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
          style: {
            ...(props.height ? { height: `${props.height}px` } : {}),
            ...(stacked ? { width: `${props.value}%` } : {}),
          },
          ...(props.value !== undefined && {
            role: 'progressbar',
            'aria-valuenow': props.value,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
          }),
        },
        // @ts-expect-error name is defined in component
        slots.default && slots.default().some((vnode) => vnode.type.name === 'CProgressBar')
          ? slots.default().map((vnode) => {
              // @ts-expect-error name is defined in component
              if (vnode.type.name === 'CProgressBar') {
                return h(vnode, {
                  ...(props.animated && { animated: props.animated }),
                  ...(props.color && { color: props.color }),
                  ...(props.value && { value: props.value }),
                  ...(props.variant && { variant: props.variant }),
                })
              }
              return vnode
            })
          : h(
              CProgressBar,
              {
                ...(props.progressBarClassName && { class: props.progressBarClassName }),
                animated: props.animated,
                color: props.color,
                value: props.value,
                variant: props.variant,
              },
              () => slots.default && slots.default(),
            ),
      )
  },
})

export { CProgress }
