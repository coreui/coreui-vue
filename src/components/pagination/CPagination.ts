import { defineComponent, h } from 'vue'

const CPagination = defineComponent({
  name: 'CPagination',
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
  },
  setup(props, { slots }) {
    return () =>
      h(
        'nav',
        {},
        h(
          'ul',
          { class: ['pagination', { [`pagination-${props.size}`]: props.size }] },
          slots.default && slots.default(),
        ),
      )
  },
})

export { CPagination }
