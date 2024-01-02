import { defineComponent, h } from 'vue'

import { Color } from '../../props'

const CListGroupItem = defineComponent({
  name: 'CListGroupItem',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'li',
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: [
            'list-group-item',
            {
              [`list-group-item-${props.color}`]: props.color,
              'list-group-item-action': props.as === 'a' || props.as === 'button',
              [`active`]: props.active,
              [`disabled`]: props.disabled,
            },
          ],
          ...((props.as === 'a' || props.as === 'button') && {
            active: props.active,
            disabled: props.disabled,
          }),
          ...(props.active && { 'aria-current': true }),
          ...(props.disabled && { 'aria-disabled': true }),
        },
        slots.default && slots.default(),
      )
  },
})

export { CListGroupItem }
