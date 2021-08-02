import { defineComponent, h } from 'vue'
import { CToastClose } from './CToastClose'

const CToastHeader = defineComponent({
  name: 'CToastHeader',
  props: {
    /**
     * Automatically add a close button to the header.
     */
    dismiss: {
      type: Boolean,
      require: false,
    },
  },
  setup(props, { slots, emit }) {
    const handleClose = () => {
      /**
       * Event called after clicking the close button.
       */
      emit('close')
    }
    return () =>
      h('div', { class: 'toast-header' }, [
        slots.default && slots.default(),
        props.dismiss &&
          h(CToastClose, {
            onClose: () => handleClose(),
          }),
      ])
  },
})

export { CToastHeader }
