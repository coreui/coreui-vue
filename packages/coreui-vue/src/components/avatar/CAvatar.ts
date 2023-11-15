import { defineComponent, h } from 'vue'

import { Color, Shape, TextColor } from '../../props'

const CAvatar = defineComponent({
  name: 'CAvatar',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Select the shape of the component.
     *
     * @values 'rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start', 'rounded-circle', 'rounded-pill', 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3'
     */
    shape: Shape,
    /**
     * Size the component small, large, or extra large.
     *
     * @values 'sm', 'md', 'lg', 'xl'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
    /**
     * The src attribute for the img element.
     */
    src: String,
    /**
     * Sets the color context of the status indicator to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    status: {
      type: String,
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
        'div',
        {
          class: [
            'avatar',
            {
              [`bg-${props.color}`]: props.color,
              [`avatar-${props.size}`]: props.size,
              [`text-${props.textColor}`]: props.textColor,
            },
            `${props.shape}`,
          ],
        },
        [
          props.src
            ? h('img', { src: props.src, class: 'avatar-img' })
            : slots.default && slots.default(),
          props.status && h('span', { class: ['avatar-status', `bg-${props.status}`] }),
        ],
      )
  },
})
export { CAvatar }
