import { defineComponent, h } from 'vue'
import { Color, TextColor } from '../props'

const CCard = defineComponent({
  name: 'CCard',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: Color,
    /**
     * Sets the text color context of the component to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
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
