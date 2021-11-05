import { defineComponent, h } from 'vue'

const CCardImage = defineComponent({
  name: 'CCardImage',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'img',
    },
    /**
     * Optionally orientate the image to the top, bottom.
     *
     * @values 'top', 'bottom'
     */
    orientation: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['top', 'bottom'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.component,
        {
          class: [props.orientation ? `card-img-${props.orientation}` : 'card-img'],
        },
        slots.default && slots.default(),
      )
  },
})

export { CCardImage }
