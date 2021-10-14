import { defineComponent, h } from 'vue'

const CFormText = defineComponent({
  name: 'CFormText',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    return () => h(props.component, { class: 'form-text' }, slots.default && slots.default())
  },
})

export { CFormText }
