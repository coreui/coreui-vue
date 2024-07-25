import { defineComponent, h } from 'vue'

const CFooter = defineComponent({
  name: 'CFooter',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'div',
    },
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
        props.as,
        { class: ['footer', { [`footer-${props.position}`]: props.position }] },
        slots.default && slots.default(),
      )
  },
})

export { CFooter }
