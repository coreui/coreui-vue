import { defineComponent, h } from 'vue'

import { Color } from '../props'

const CTableRow = defineComponent({
  name: 'CTableRow',
  props: {
    /**
     * Highlight a table row or cell..
     */
    active: {
      type: Boolean,
      required: false,
    },
    /**
     * Set the vertical aligment.
     *
     * @values 'bottom', 'middle', 'top'
     */
    align: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['bottom', 'middle', 'top'].includes(value)
      },
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
  },
  setup(props, { slots }) {
    return () =>
      h(
        'tr',
        {
          class: [
            {
              [`align-${props.align}`]: props.align,
              'table-active': props.active,
              [`table-${props.color}`]: props.color,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CTableRow }
