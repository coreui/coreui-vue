import { defineComponent, h } from 'vue'
import { Color, TextColor } from '../props'

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
     * Sets the text color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'white', 'muted', 'text-high-emphasis', 'text-high-medium', 'text-disabled', 'text-high-emphasis-inverse', 'text-high-medium-inverse', 'text-disabled-inverse'
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
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CCard }
