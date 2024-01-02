import { defineComponent, h } from 'vue'

const CCardText = defineComponent({
  name: 'CCardText',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'p',
    },
  },
  setup(props, { slots }) {
    return () => h(props.as, { class: 'card-text' }, slots.default && slots.default())
  },
})

export { CCardText }
