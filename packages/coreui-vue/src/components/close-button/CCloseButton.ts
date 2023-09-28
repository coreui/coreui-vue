import { defineComponent, h } from 'vue'

export const CCloseButton = defineComponent({
  name: 'CCloseButton',
  props: {
    /**
     * Invert the default color.
     */
    dark: Boolean,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * Change the default color to white.
     */
    white: Boolean,
  },
  emits: [
    /**
     * Event called when the user clicks on the component.
     */
    'click',
  ],
  setup(props, { emit }) {
    const handleClick = () => {
      if (props.disabled) {
        return
      }

      emit('click')
    }
    return () =>
      h('button', {
        type: 'button',
        class: [
          'btn',
          'btn-close',
          {
            ['btn-close-white']: props.white,
          },
          props.disabled,
        ],
        'aria-label': 'Close',
        disabled: props.disabled,
        ...(props.dark && { 'data-coreui-theme': 'dark' }),
        onClick: handleClick,
      })
  },
})
