import { defineComponent, h, inject } from 'vue'
import { CCloseButton } from '../close-button/CCloseButton'

const CToastClose = defineComponent({
  name: 'CToastClose',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: String,
    ...CCloseButton.props,
  },
  emits: [
    /**
     * Event called before the dissmiss animation has started.
     */
    'close',
  ],
  setup(props, { slots, emit }) {
    // eslint-disable-next-line no-unused-vars
    const updateVisible = inject('updateVisible') as (visible: boolean) => void
    const handleClose = () => {
      emit('close')
      updateVisible(false)
    }
    return () =>
      props.as
        ? h(
            props.as,
            {
              onClick: () => {
                handleClose()
              },
            },
            () => slots.default && slots.default(),
          )
        : h(CCloseButton, {
            ...props,
            onClick: () => {
              handleClose()
            },
          })
  },
})

export { CToastClose }
