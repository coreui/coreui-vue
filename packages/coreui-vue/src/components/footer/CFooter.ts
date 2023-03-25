import { defineComponent, h } from 'vue'

const CFooter = defineComponent({
  name: 'CFooter',
  props: {
    /**
     * Place footer in non-static positions.
     *
     * @values 'fixed', 'sticky'
     */
    position: {
      type: String,
      validator: (value: string) => {
        return ['fixed', 'sticky'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        { class: ['footer', { [`footer-${props.position}`]: props.position }] },
        slots.default && slots.default(),
      )
  },
})

export { CFooter }
