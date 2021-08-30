import { defineComponent, h } from 'vue'

import { Color, Shape, TextColor } from '../props'

const CBadge = defineComponent({
  name: 'CBadge',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
     */
    color: Color,
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     * @default 'span'
     */
    component: {
      type: String,
      required: false,
      default: 'span',
    },
    /**
     * Select the shape of the component.
     *
     * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
     */
    shape: Shape,
    /**
     * Size the component small.
     *
     * @type 'sm'
     */
    size: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return value === 'sm'
      },
    },
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors.
     *
     * @value 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
     */
    textColor: TextColor,
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.component,
        {
          class: [
            'badge',
            {
              [`bg-${props.color}`]: props.color,
              [`text-${props.textColor}`]: props.textColor,
              [`badge-${props.size}`]: props.size,
            },
            props.shape,
          ],
        },
        slots.default && slots.default(),
      )
  },
})
export { CBadge }
