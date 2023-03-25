import { defineComponent, h } from 'vue'

const CButtonGroup = defineComponent({
  name: 'CButtonGroup',
  props: {
    /**
     * Size the component small or large.
     *
     * @values 'sm', 'lg'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
     */
    vertical: Boolean,
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            props.vertical ? 'btn-group-vertical' : 'btn-group',
            { [`btn-group-${props.size}`]: props.size },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CButtonGroup }
