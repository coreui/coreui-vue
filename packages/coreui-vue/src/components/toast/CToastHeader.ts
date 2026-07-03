import { defineComponent, h } from 'vue'
import { CToastClose } from './CToastClose'

const CToastHeader = defineComponent({
  name: 'CToastHeader',
  props: {
    /**
     * Sets the `aria-label` of the close button.
     *
     * @since 5.10.0
     */
    ariaCloseLabel: String,
    /**
     * Automatically add a close button to the header.
     */
    closeButton: Boolean,
  },
  setup(props, { slots }) {
    return () =>
      h('div', { class: 'toast-header' }, [
        slots.default && slots.default(),
        props.closeButton && h(CToastClose, { ariaLabel: props.ariaCloseLabel }),
      ])
  },
})

export { CToastHeader }
