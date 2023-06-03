import { defineComponent, h, onMounted, provide, ref, Transition } from 'vue'

import { Color } from '../../props'

const CToast = defineComponent({
  name: 'CToast',
  props: {
    /**
     * Auto hide the toast.
     */
    autohide: {
      type: Boolean,
      default: true,
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
    /**
     * Delay hiding the toast (ms).
     */
    delay: {
      type: Number,
      default: 5000,
    },
    /**
     * Optionally add a close button to component and allow it to self dismiss.
     */
    dismissible: {
      type: Boolean,
      default: true,
    },
    /**
     * index of the component.
     */
    index: Number,
    /**
     * Title node for your component.
     */
    title: String,
    /**
     * Toggle the visibility of component.
     */
    visible: Boolean,
  },
  emits: [
    /**
     * Callback fired when the component requests to be closed.
     */
    'close',
    /**
     * Callback fired when the component requests to be shown.
     */
    'show',
  ],
  setup(props, { slots, emit }) {
    const timeout = ref(0)
    const visible = ref()

    const updateVisible = (_visible: boolean) => {
      visible.value = _visible
    }

    provide('updateVisible', updateVisible)

    onMounted(() => {
      if (props.visible) {
        visible.value = props.visible
      }

      if (props.autohide) {
        clearTimeout(timeout.value)
        timeout.value = window.setTimeout(() => {
          visible.value = false
          emit('close')
        }, props.delay)
      }
    })

    return () =>
      h(
        Transition,
        {
          appear: true,
          enterFromClass: '',
          enterActiveClass: 'show showing',
          enterToClass: 'show',
          leaveFromClass: 'show',
          leaveActiveClass: 'show showing',
          leaveToClass: 'show',
          onAfterEnter: (el) => {
            el.classList.add('show')
            props.index ? emit('show', props.index) : emit('show')
          },
          onAfterLeave: () => {
            props.index ? emit('close', props.index) : emit('close')
          },
        },
        {
          default: () =>
            visible.value &&
            h(
              'div',
              {
                class: [
                  'toast fade',
                  {
                    [`bg-${props.color}`]: props.color,
                  },
                ],
                'aria-live': 'assertive',
                'aria-atomic': true,
                role: 'alert',
              },
              slots.default && slots.default(),
            ),
        },
      )
  },
})

export { CToast }
