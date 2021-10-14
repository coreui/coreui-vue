import { defineComponent, h } from 'vue'

const CNav = defineComponent({
  name: 'CNav',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'ul',
    },
    /**
     * Specify a layout type for component.
     *
     * @values 'fill', 'justified'
     */
    layout: {
      type: String,
      required: false,
      default: undefined,
      validator: (value: string) => {
        return ['fill', 'justified'].includes(value)
      },
    },
    /**
     * Set the nav variant to tabs or pills.
     *
     * @values 'tabs', 'pills'
     */
    variant: {
      type: String,
      required: false,
      default: undefined,
      validator: (value: string) => {
        return ['tabs', 'pills'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.component,
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
