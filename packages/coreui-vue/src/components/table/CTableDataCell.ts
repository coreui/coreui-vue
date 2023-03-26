import { defineComponent, h } from 'vue'

import { Color } from '../../props'

const CTableDataCell = defineComponent({
  name: 'CTableDataCell',
  props: {
    /**
     * Highlight a table row or cell.
     */
    active: Boolean,
    /**
     * Set the vertical aligment.
     *
     * @values 'bottom', 'middle', 'top'
     */
    align: {
      type: String,
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
    /**
     * @ignore
     */
    scope: String,
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.scope ? 'th' : 'td',
        {
          class: [
            {
              [`align-${props.align}`]: props.align,
              'table-active': props.active,
              [`table-${props.color}`]: props.color,
            },
          ],
          ...(props.scope && { scope: props.scope }),
        },
        slots.default && slots.default(),
      )
  },
})

export { CTableDataCell }
