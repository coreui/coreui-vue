import { defineComponent, h } from 'vue'

import { CCloseButton } from '../close-button/CCloseButton'

const CModalHeader = defineComponent({
  name: 'CModalHeader',
  props: {
    /**
     * Add a close button component to the header which will call the provided handler when clicked.
     */
    dismiss: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
    /**
     * Event called before the dissmiss animation has started.
     */
    'dismiss',
  ],
  setup(props, { slots, emit }) {
    const handleDismiss = function () {
      emit('dismiss')
    }
    return () =>
      h('span', { class: 'modal-header' }, [
        slots.default && slots.default(),
        props.dismiss && h(CCloseButton, { onClick: handleDismiss }, ''),
      ])
  },
})

export { CModalHeader }
