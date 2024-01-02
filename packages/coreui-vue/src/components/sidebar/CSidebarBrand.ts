import { defineComponent, h } from 'vue'

const CSidebarBrand = defineComponent({
  name: 'CSidebarBrand',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     *
     */
    as: {
      type: String,
      default: 'div',
    },
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: String,
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as ?? (props.href ? 'a' : 'div'),
        { class: 'sidebar-brand', href: props.href },
        slots.default && slots.default(),
      )
  },
})

export { CSidebarBrand }
