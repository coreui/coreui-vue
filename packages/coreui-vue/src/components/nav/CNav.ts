import { defineComponent, h } from 'vue'

const CNav = defineComponent({
  name: 'CNav',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'ul',
    },
    /**
     * Specify a layout type for component.
     *
     * @values 'fill', 'justified'
     */
    layout: {
      type: String,
      validator: (value: string) => {
        return ['fill', 'justified'].includes(value)
      },
    },
    /**
     * Set the nav variant to tabs or pills.
     *
     * @values 'pills', 'tabs', 'underline', 'underline-border'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return ['pills', 'tabs', 'underline', 'underline-border'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: [
            'nav',
            {
              [`nav-${props.layout}`]: props.layout,
              [`nav-${props.variant}`]: props.variant,
            },
          ],
          role: 'navigation',
        },
        slots.default && slots.default(),
      )
  },
})

export { CNav }
