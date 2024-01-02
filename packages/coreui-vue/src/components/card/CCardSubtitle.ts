import { defineComponent, h } from 'vue'

const CCardSubtitle = defineComponent({
  name: 'CCardSubtitle',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'h6',
    },
  },
  setup(props, { slots }) {
    return () => h(props.as, { class: 'card-subtitle' }, slots.default && slots.default())
  },
})
export { CCardSubtitle }
