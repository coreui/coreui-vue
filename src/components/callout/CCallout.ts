import { defineComponent, h } from 'vue'
import { Color } from '../props'

const CCallout = defineComponent({
  name: 'CCallout',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color: Color,
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            'callout',
            {
              [`callout-${props.color}`]: props.color,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})
export { CCallout }
