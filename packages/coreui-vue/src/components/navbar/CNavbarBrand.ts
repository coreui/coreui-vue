import { defineComponent, h } from 'vue'

const CNavbarBrand = defineComponent({
  name: 'CNavbarBrand',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     */
    component: {
      type: String,
      default: 'a',
      required: false,
    },
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.component ? props.component : props.href ? 'a' : 'span',
        {
          class: 'navbar-brand',
          href: props.href,
        },
        slots.default && slots.default(),
      )
  },
})

export { CNavbarBrand }
