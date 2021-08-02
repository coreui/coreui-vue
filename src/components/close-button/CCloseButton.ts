import { defineComponent, h } from 'vue'

export const CCloseButton = defineComponent({
  name: 'CCloseButton',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * Change the default color to white.
     */
    white: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    return () =>
      h('button', {
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
      })
  },
})
