import { defineComponent, h } from 'vue'

const CCardText = defineComponent({
  name: 'CCardText',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'p',
    },
  },
  setup(props, { slots }) {
    return () => h(props.component, { class: 'card-text' }, slots.default && slots.default())
  },
})

export { CCardText }
