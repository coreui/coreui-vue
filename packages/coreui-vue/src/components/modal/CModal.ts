import { defineComponent, h, provide, ref, RendererElement, Transition, watch } from 'vue'

import { CBackdrop } from './../backdrop/CBackdrop'

const CModal = defineComponent({
  name: 'CModal',
  props: {
    /**
     * Align the modal in the center or top of the screen.
     *
     * @values 'top', 'center'
     */
    alignment: {
      default: 'top',
      required: false,
      validator: (value: string) => {
        return ['top', 'center'].includes(value)
      },
    },
    /**
     * Apply a backdrop on body while offcanvas is open.
     *
     * @values 'static'
     */
    backdrop: {
      type: [Boolean, String],
      default: true,
      require: false,
    },
    /**
     * A string of all className you want applied to the modal content component.
     */
    contentClassName: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Set modal to covers the entire user viewport
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    fullscreen: {
      type: [Boolean, String],
      default: undefined,
      required: false,
      validator: (value: boolean | string) => {
        if (typeof value == 'string') {
          return ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
        }
        if (typeof value == 'boolean') {
          return true
        }
        return false
      },
    },
    /**
     * Closes the modal when escape key is pressed.
     */
    keyboard: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Create a scrollable modal that allows scrolling the modal body.
     */
    scrollable: {
      type: Boolean,
      required: false,
    },
    /**
     * Size the component small, large, or extra large.
     *
     * @values 'sm', 'lg', 'xl'
     */
    size: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['sm', 'lg', 'xl'].includes(value)
      },
    },
    /**
     * Remove animation to create modal that simply appear rather than fade in to view.
     */
    transition: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Toggle the visibility of alert component.
     */
    visible: Boolean,
  },
  emits: [
    /**
     * Callback fired when the component requests to be closed.
     */
    'close',
    /**
     * Callback fired when the component requests to be closed.
     */
    'close-prevented',
    /**
     * Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false.
     */
    'show',
  ],
  setup(props, { slots, attrs, emit }) {
    const modalRef = ref()
    const modalContentRef = ref()
    const visible = ref(props.visible)

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      },
    )

    const handleEnter = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      document.body.classList.add('modal-open')
      el.style.display = 'block'
      setTimeout(() => {
        el.classList.add('show')
      }, 1)
      emit('show')
    }
    const handleAfterEnter = () => {
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('keyup', handleKeyUp)
    }
    const handleLeave = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      document.body.classList.remove('modal-open')
      el.classList.remove('show')
      el.style.display = 'none'
    }
    const handleAfterLeave = (el: RendererElement) => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('keyup', handleKeyUp)
      el.style.display = 'none'
    }

    const handleDismiss = () => {
      emit('close')
      visible.value = false
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (modalContentRef.value && !modalContentRef.value.contains(event.target as HTMLElement)) {
        if (props.backdrop !== 'static' && event.key === 'Escape' && props.keyboard) {
          handleDismiss()
        }
        if (props.backdrop === 'static') {
          modalRef.value.classList.add('modal-static')
          emit('close-prevented')
          setTimeout(() => {
            modalRef.value.classList.remove('modal-static')
          }, 300)
        }
      }
    }

    const handleMouseDown = (event: Event) => {
      window.addEventListener('mouseup', () => handleMouseUp(event), { once: true })
    }

    const handleMouseUp = (event: Event) => {
      if (modalContentRef.value && !modalContentRef.value.contains(event.target as HTMLElement)) {
        if (props.backdrop !== 'static') {
          handleDismiss()
        }
        if (props.backdrop === 'static') {
          modalRef.value.classList.add('modal-static')
          setTimeout(() => {
            modalRef.value.classList.remove('modal-static')
          }, 300)
        }
      }
    }

    provide('handleDismiss', handleDismiss)

    return () => [
      h(
        Transition,
        {
          onEnter: (el, done) => handleEnter(el, done),
          onAfterEnter: () => handleAfterEnter(),
          onLeave: (el, done) => handleLeave(el, done),
          onAfterLeave: (el) => handleAfterLeave(el),
        },
        () =>
          visible.value &&
          h(
            'div',
            {
              class: [
                'modal',
                {
                  ['fade']: props.transition,
                },
                attrs.class,
              ],
              ref: modalRef,
            },
            h(
              'div',
              {
                class: [
                  'modal-dialog',
                  {
                    'modal-dialog-centered': props.alignment === 'center',
                    [`modal-fullscreen-${props.fullscreen}-down`]:
                      props.fullscreen && typeof props.fullscreen === 'string',
                    'modal-fullscreen': props.fullscreen && typeof props.fullscreen === 'boolean',
                    ['modal-dialog-scrollable']: props.scrollable,
                    [`modal-${props.size}`]: props.size,
                  },
                ],
                role: 'dialog',
              },
              h(
                'div',
                { class: ['modal-content', props.contentClassName], ref: modalContentRef },
                slots.default && slots.default(),
              ),
            ),
          ),
      ),
      props.backdrop &&
        h(CBackdrop, {
          class: 'modal-backdrop',
          visible: visible.value,
        }),
    ]
  },
})

export { CModal }
