import { defineComponent, h, inject, resolveComponent } from 'vue'
import { CCloseButton } from '../close-button/CCloseButton'

const CToastClose = defineComponent({
  name: 'CToastClose',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: undefined,
      required: false,
    },
    ...CCloseButton.props,
  },
  setup(props, { slots, emit }) {
    const updateVisible = inject('updateVisible') as any
    const handleClose = () => {
      emit('dismiss')
      updateVisible(false)
    }
    return () =>
      props.component
        ? h(
            resolveComponent(props.component),
            {
              onClick: () => {
                handleClose()
              },
            },
            slots.default && slots.default(),
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
