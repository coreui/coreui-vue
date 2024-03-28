import { defineComponent, h } from 'vue'

import { Color, Shape, TextColor } from '../../props'

const CBadge = defineComponent({
  name: 'CBadge',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'span',
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Position badge in one of the corners of a link or button.
     *
     * @values 'top-start', 'top-end', 'bottom-end', 'bottom-start'
     */
    position: {
      type: String,
      validator: (value: string) => {
        return ['top-start', 'top-end', 'bottom-end', 'bottom-start'].includes(value)
      },
    },
    /**
     * Select the shape of the component.
     *
     * @values 'rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start', 'rounded-circle', 'rounded-pill', 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3'
     */
    shape: Shape,
    /**
     * Size the component small.
     *
     * @values 'sm'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return value === 'sm'
      },
    },
    /**
     * Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     * @since 5.0.0
     */
    textBgColor: Color,
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'primary-emphasis', 'secondary-emphasis', 'success-emphasis', 'danger-emphasis', 'warning-emphasis', 'info-emphasis', 'light-emphasis', 'body', 'body-emphasis', 'body-secondary', 'body-tertiary', 'black', 'black-50', 'white', 'white-50'
     */
    textColor: TextColor,
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: [
            'badge',
            {
              [`bg-${props.color}`]: props.color,
              'position-absolute translate-middle': props.position,
              'top-0': props.position && props.position.includes('top'),
              'top-100': props.position && props.position.includes('bottom'),
              'start-100': props.position && props.position.includes('end'),
              'start-0': props.position && props.position.includes('start'),
              [`badge-${props.size}`]: props.size,
              [`text-${props.textColor}`]: props.textColor,
              [`text-bg-${props.textBgColor}`]: props.textBgColor,
            },
            props.shape,
          ],
        },
        slots.default && slots.default(),
      )
  },
})
export { CBadge }
