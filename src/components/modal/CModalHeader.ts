import { defineComponent, h, inject } from 'vue'

import { CCloseButton } from '../close-button/CCloseButton'

const CModalHeader = defineComponent({
  name: 'CModalHeader',
  props: {
    /**
     * Add a close button component to the header.
     */
    closeButton: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props, { slots }) {
    const handleDismiss = inject('handleDismiss') as () => void
    return () =>
      h('span', { class: 'modal-header' }, [
        slots.default && slots.default(),
        props.closeButton && h(CCloseButton, { onClick: () => handleDismiss() }, ''),
      ])
  },
})

export { CModalHeader }
