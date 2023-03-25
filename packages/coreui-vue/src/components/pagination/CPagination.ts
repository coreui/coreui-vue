import { defineComponent, h } from 'vue'

const CPagination = defineComponent({
  name: 'CPagination',
  props: {
    /**
     * Set the alignment of pagination components.
     *
     * @values 'start', 'center', 'end'
     */
    align: {
      type: String,
      validator: (value: string) => {
        return ['start', 'center', 'end'].includes(value)
      },
    },
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
        'nav',
        {},
        h(
          'ul',
          {
            class: [
              'pagination',
              {
                [`justify-content-${props.align}`]: props.align,
                [`pagination-${props.size}`]: props.size,
              },
            ],
          },
          slots.default && slots.default(),
        ),
      )
  },
})

export { CPagination }
