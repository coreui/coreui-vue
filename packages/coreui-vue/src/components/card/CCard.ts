import { defineComponent, h } from 'vue'

import { Color, TextColor } from '../../props'

const CCard = defineComponent({
  name: 'CCard',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     * @since 5.0.0
     */
    textBgColor: Color,
    /**
     * Sets the text color context of the component to one of CoreUI’s themed colors.
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
            'card',
            {
              [`bg-${props.color}`]: props.color,
              [`text-${props.textColor}`]: props.textColor,
              [`text-bg-${props.textBgColor}`]: props.textBgColor,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CCard }
