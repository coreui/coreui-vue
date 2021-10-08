import { defineComponent, h } from 'vue'
import { CToastClose } from './CToastClose'

const CToastHeader = defineComponent({
  name: 'CToastHeader',
  props: {
    /**
     * Automatically add a close button to the header.
     */
    closeButton: {
      type: Boolean,
      require: false,
    },
  },
  emits: [
    /**
     * Event called after clicking the close button.
     */
    'close',
  ],
  setup(props, { slots, emit }) {
    return () =>
      h('div', { class: 'toast-header' }, [
        slots.default && slots.default(),
        props.closeButton &&
          h(CToastClose, {
            onClose: () => emit('close'),
          }),
      ])
  },
})

export { CToastHeader }
