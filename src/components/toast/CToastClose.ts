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
  emits: ['dismiss'],
  setup(props, { slots, emit }) {
    // eslint-disable-next-line no-unused-vars
    const updateVisible = inject('updateVisible') as (visible: boolean) => void
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
