import { defineComponent, h, provide, ref, RendererElement, Transition } from 'vue'

import { Color } from '../props'

const CToast = defineComponent({
  name: 'CToast',
  props: {
    /**
     * Auto hide the toast.
     *
     * @default true
     */
    autohide: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @default 'primary'
     * @value 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
    /**
     * Delay hiding the toast (ms).
     */
    delay: {
      type: Number,
      default: 5000,
      required: false,
    },
    /**
     * Optionally add a close button to component and allow it to self dismiss.
     *
     * @default true
     */
    dismissible: {
      type: Boolean,
      default: true,
      required: false,
    },
    key: {
      type: Number,
      required: false,
    },
    /**
     * Title node for your component.
     */
    title: {
      type: String,
      required: false,
    },
    /**
     * Toggle the visibility of component.
     *
     * @default true
     */
    visible: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  emits: [
    /**
     * Event called before the dissmiss animation has started.
     */
    'dismiss',
  ],
  setup(props, { slots, emit }) {
    const visible = ref(props.visible)
    let timeout = 0

    const updateVisible = (v: boolean) => {
      visible.value = v
    }
    provide('updateVisible', updateVisible)

    const handleEnter = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      setTimeout(() => {
        el.classList.add('show')
      }, 1)
    }
    const handleBeforeLeave = (el: RendererElement) => {
      el.classList.remove('show')
    }
    const handleLeave = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      el.classList.remove('show')
    }
    const handleAfterLeave = (el: RendererElement) => {
      el.classList.add('hide')
      if (props.key) {
        emit('dismiss', props.key)
      } else {
        emit('dismiss')
      }
    }

    ;(() => {
      if (props.autohide) {
        clearTimeout(timeout)
        timeout = window.setTimeout(() => {
          visible.value = false
        }, props.delay)
      }
    })()

    // autohide()

    return () =>
      h(
        Transition,
        {
          appear: true,
          onEnter: (el, done) => handleEnter(el, done),
          onBeforeLeave: (el) => handleBeforeLeave(el),
          onLeave: (el, done) => handleLeave(el, done),
          onAfterLeave: (el) => handleAfterLeave(el),
        },
        [
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
                ref: 'toastRef',
              },
              slots.default && slots.default(),
            ),
        ],
      )
  },
})

export { CToast }
