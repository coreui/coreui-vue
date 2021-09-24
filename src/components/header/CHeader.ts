import { defineComponent, h } from 'vue'

const CHeader = defineComponent({
  name: 'CHeader',
  props: {
    /**
     * Defines optional container wrapping children elements.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'
     */
    container: {
      type: [Boolean, String],
      default: undefined,
      required: false,
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
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['fixed', 'sticky'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        { class: ['header', { [`header-${props.position}`]: props.position }] },
        props.container
          ? h(
              'div',
              { class: `container${props.container !== true ? '-' + props.container : ''}` },
              slots.default && slots.default(),
            )
          : slots.default && slots.default(),
      )
  },
})

export { CHeader }
