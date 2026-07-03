import { defineComponent, h, inject, Ref } from 'vue'

import { CCloseButton } from '../close-button/CCloseButton'

const CModalHeader = defineComponent({
  name: 'CModalHeader',
  props: {
    /**
     * Sets the `aria-label` of the close button.
     *
     * @since 5.10.0
     */
    ariaCloseLabel: String,
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
      h('div', { class: 'modal-header' }, [
        slots.default && slots.default(),
        props.closeButton &&
          h(
            CCloseButton,
            {
              ariaLabel: props.ariaCloseLabel,
              onClick: () => {
                visible.value = false
              },
            },
            ''
          ),
      ])
  },
})

export { CModalHeader }
