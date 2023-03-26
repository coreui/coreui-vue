import { defineComponent, h, ref, Transition, watch } from 'vue'

import { CCloseButton } from '../close-button'

import { Color } from '../../props'

export const CAlert = defineComponent({
  name: 'CAlert',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Optionally add a close button to alert and allow it to self dismisss.
     */
    dismissible: Boolean,
    /**
     * Set the alert variant to a solid.
     *
     * @values 'solid'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return value === 'solid'
      },
    },
    /**
     * Toggle the visibility of alert component.
     */
    visible: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    /**
     * Callback fired when the component requests to be closed.
     */
    'close',
  ],
  setup(props, { slots, emit }) {
    const visible = ref(props.visible)

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      },
    )

    const handleDismiss = () => {
      visible.value = false
      emit('close')
    }

    return () =>
      h(
        Transition,
        {
          enterFromClass: '',
          enterActiveClass: 'fade',
          enterToClass: 'fade show',
          leaveActiveClass: 'fade',
        },
        {
          default: () =>
            visible.value &&
            h(
              'div',
              {
                class: [
                  'alert',
                  props.variant === 'solid'
                    ? `bg-${props.color} text-white border-0`
                    : `alert-${props.color}`,
                  {
                    [`alert-${props.color}`]: props.color,
                    'alert-dismissible': props.dismissible,
                  },
                ],
              },
              [
                slots.default && slots.default(),
                props.dismissible &&
                  h(CCloseButton, {
                    onClick: () => {
                      handleDismiss()
                    },
                  }),
              ],
            ),
        },
      )
  },
})
