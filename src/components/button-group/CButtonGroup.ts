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
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
     */
    vertical: {
      type: Boolean,
      required: false,
    },
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
