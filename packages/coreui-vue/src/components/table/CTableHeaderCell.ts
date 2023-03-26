import { defineComponent, h } from 'vue'

import { Color } from '../../props'

const CTableHeaderCell = defineComponent({
  name: 'CTableHeaderCell',
  props: {
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
        'th',
        {
          class: [
            {
              [`table-${props.color}`]: props.color,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CTableHeaderCell }
