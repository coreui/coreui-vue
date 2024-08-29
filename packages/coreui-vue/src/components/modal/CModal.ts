import {
  defineComponent,
  h,
  PropType,
  provide,
  ref,
  RendererElement,
  Transition,
  vShow,
  watch,
  withDirectives,
} from 'vue'

import { CBackdrop } from '../backdrop/CBackdrop'
import { CConditionalTeleport } from '../conditional-teleport'

import { executeAfterTransition } from '../../utils/transition'

const CModal = defineComponent({
  name: 'CModal',
  inheritAttrs: false,
  props: {
    /**
     * Align the modal in the center or top of the screen.
     *
     * @values 'top', 'center'
     */
    alignment: {
      default: 'top',
      validator: (value: string) => {
        return ['top', 'center'].includes(value)
      },
    },
    /**
     * Apply a backdrop on body while offcanvas is open.
     *
     * @values boolean | 'static'
     */
    backdrop: {
      type: [Boolean, String],
      default: true,
      validator: (value: boolean | string) => {
        if (typeof value == 'string') {
          return ['static'].includes(value)
        }
        if (typeof value == 'boolean') {
          return true
        }
        return false
      },
    },
    /**
     * Appends the vue popover to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`.
     *
     * @since 5.3.0
     */
    container: {
      type: [Object, String] as PropType<HTMLElement | (() => HTMLElement) | string>,
      default: 'body',
    },
    /**
     * A string of all className you want applied to the modal content component.
     */
    contentClassName: String,
    /**
     * Puts the focus on the modal when shown.
     *
     * @since 5.0.0
     */
    focus: {
      type: Boolean,
      default: true,
    },
    /**
     * Set modal to covers the entire user viewport
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    fullscreen: {
      type: [Boolean, String],
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
    },
    /**
     * Create a scrollable modal that allows scrolling the modal body.
     */
    scrollable: Boolean,
    /**
     * Size the component small, large, or extra large.
     *
     * @values 'sm', 'lg', 'xl'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'lg', 'xl'].includes(value)
      },
    },
    /**
     * Generates modal using Teleport.
     *
     * @since 5.3.0
     */
    teleport: {
      type: Boolean,
      default: false,
    },
    /**
     * Remove animation to create modal that simply appear rather than fade in to view.
     */
    transition: {
      type: Boolean,
      default: true,
    },
    /**
     * By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false.
     */
    unmountOnClose: {
      type: Boolean,
      default: true,
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
    const activeElementRef = ref()
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
      activeElementRef.value = document.activeElement as HTMLElement | null
      executeAfterTransition(() => done(), el as HTMLElement)
      document.body.classList.add('modal-open')
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px'
      el.style.display = 'block'
      setTimeout(() => {
        el.classList.add('show')
      }, 1)
      emit('show')
    }

    const handleAfterEnter = () => {
      props.focus && modalRef.value?.focus()
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('keyup', handleKeyUp)
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleLeave = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      document.body.classList.remove('modal-open')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('padding-right')
      if (document.body.className === '') {
        document.body.removeAttribute('class')
      }

      el.classList.remove('show')
    }

    const handleAfterLeave = (el: RendererElement) => {
      activeElementRef.value?.focus()
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

    const modal = () =>
      h(
        'div',
        {
          ...attrs,
          class: [
            'modal',
            {
              ['fade']: props.transition,
            },
            attrs.class,
          ],
          ...(visible.value ? { 'aria-modal': true, role: 'dialog' } : { 'aria-hidden': 'true' }),
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
          },
          h(
            'div',
            { class: ['modal-content', props.contentClassName], ref: modalContentRef },
            slots.default && slots.default(),
          ),
        ),
      )

    return () =>
      h(
        CConditionalTeleport,
        {
          container: props.container,
          teleport: props.teleport,
        },
        {
          default: () => [
            h(
              Transition,
              {
                css: false,
                onEnter: (el, done) => handleEnter(el, done),
                onAfterEnter: () => handleAfterEnter(),
                onLeave: (el, done) => handleLeave(el, done),
                onAfterLeave: (el) => handleAfterLeave(el),
              },
              () =>
                props.unmountOnClose
                  ? visible.value && modal()
                  : withDirectives(modal(), [[vShow, visible.value]]),
            ),
            props.backdrop &&
              h(CBackdrop, {
                class: 'modal-backdrop',
                visible: visible.value,
              }),
          ],
        },
      )
  },
})

export { CModal }
