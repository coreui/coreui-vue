import { defineComponent, h } from 'vue'
import { CLink } from '../link'

const CCardLink = defineComponent({
  name: 'CCardLink',
  props: {
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
      type: String,
      default: '#',
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        CLink,
        { class: 'card-link', href: props.href },
        { default: () => slots.default && slots.default() },
      )
  },
})

export { CCardLink }
