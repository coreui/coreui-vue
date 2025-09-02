import { defineComponent, h, inject, Ref } from 'vue'

import { CCloseButton } from '../close-button/CCloseButton'

const CModalHeader = defineComponent({
  name: 'CModalHeader',
  props: {
    /**
     * Add a close button component to the header.
     */
    closeButton: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const visible = inject<Ref<boolean>>('visible')!
    return () =>
      h('span', { class: 'modal-header' }, [
        slots.default && slots.default(),
        props.closeButton && h(CCloseButton, { onClick: () => {
          visible.value = false
        } }, ''),
      ])
  },
})

export { CModalHeader }
