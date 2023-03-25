import { defineComponent, h } from 'vue'

const CInputGroup = defineComponent({
  name: 'CInputGroup',
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
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            'input-group',
            {
              [`input-group-${props.size}`]: props.size,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CInputGroup }
