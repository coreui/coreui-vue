import { defineComponent, h } from 'vue'

const CInputGroupText = defineComponent({
  name: 'CInputGroupText',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'span',
    },
  },
  setup(props, { slots }) {
    return () => h(props.as, { class: 'input-group-text' }, slots.default && slots.default())
  },
})

export { CInputGroupText }
