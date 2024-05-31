import { defineComponent, h } from 'vue'

const CHeader = defineComponent({
  name: 'CHeader',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'div',
    },
    /**
     * Defines optional container wrapping children elements.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'
     */
    container: {
      type: [Boolean, String],
      validator: (value: boolean | string) => {
        return (
          typeof value === 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(value)
        )
      },
    },
    /**
     * Place header in non-static positions.
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
        { class: ['header', { [`header-${props.position}`]: props.position }] },
        props.container
          ? h(
              'div',
              { class: `container${props.container === true ? '' : '-' + props.container}` },
              slots.default && slots.default(),
            )
          : slots.default && slots.default(),
      )
  },
})

export { CHeader }
