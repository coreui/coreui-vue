import { defineComponent, h } from 'vue'

const CHeaderBrand = defineComponent({
  name: 'CHeaderBrand',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'a',
    },
  },
  setup(props, { slots }) {
    return () => h(props.component, { class: 'header-brand' }, slots.default && slots.default())
  },
})

export { CHeaderBrand }
