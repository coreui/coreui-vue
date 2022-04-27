import { defineComponent, h, ref, RendererElement, Transition, watch, withDirectives } from 'vue'

import { CBackdrop } from '../backdrop'

import { vVisible } from '../../directives/v-c-visible'
import { executeAfterTransition } from './../../utils/transition'

const COffcanvas = defineComponent({
  name: 'COffcanvas',
  props: {
    /**
     * Apply a backdrop on body while offcanvas is open.
     */
    backdrop: {
      type: Boolean,
      default: true,
      require: false,
    },
    /**
     * Closes the offcanvas when escape key is pressed.
     */
    keyboard: {
      type: Boolean,
      default: true,
      require: false,
    },
    /**
     * Components placement, there’s no default placement.
     *
     * @values 'start', 'end', 'top', 'bottom'
     */
    placement: {
      type: String,
      default: undefined,
      require: true,
      validator: (value: string) => {
        return ['start', 'end', 'top', 'bottom'].includes(value)
      },
    },
    /**
     * Allow body scrolling while offcanvas is open
     */
    scroll: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Toggle the visibility of offcanvas component.
     */
    visible: {
      type: Boolean,
      require: false,
    },
  },
  emits: [
    /**
     * Callback fired when the component requests to be hidden.
     */
    'hide',
    /**
     * Callback fired when the component requests to be shown.
     */
    'show',
  ],
  setup(props, { slots, emit }) {
    const offcanvasRef = ref()
    const visible = ref(props.visible)

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      },
    )

    watch(visible, () => {
      if (visible.value) {
        if (!props.scroll) {
          document.body.style.overflow = 'hidden'
          document.body.style.paddingRight = '0px'
        }
        return
      }

      if (!props.scroll) {
        document.body.style.removeProperty('overflow')
        document.body.style.removeProperty('padding-right')
      }
    })

    const handleEnter = (el: RendererElement, done: () => void) => {
      emit('show')
      executeAfterTransition(() => done(), el as HTMLElement)
      setTimeout(() => {
        el.style.visibility = 'visible'
        el.classList.add('show')
      }, 1)
    }
    const handleAfterEnter = () => {
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('keyup', handleKeyUp)
    }
    const handleLeave = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('keyup', handleKeyUp)
      el.classList.remove('show')
    }
    const handleAfterLeave = (el: RendererElement) => {
      el.style.visibility = 'hidden'
    }

    const handleDismiss = () => {
      visible.value = false
      emit('hide')
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (offcanvasRef.value && !offcanvasRef.value.contains(event.target as HTMLElement)) {
        if (event.key === 'Escape' && props.keyboard && props.backdrop) {
          return handleDismiss()
        }
      }
    }

    const handleMouseDown = (event: Event) => {
      window.addEventListener('mouseup', () => handleMouseUp(event), { once: true })
    }

    const handleMouseUp = (event: Event) => {
      if (offcanvasRef.value && !offcanvasRef.value.contains(event.target as HTMLElement)) {
        props.backdrop && handleDismiss()
      }
    }

    return () => [
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
          withDirectives(
            h(
              'div',
              {
                class: [
                  'offcanvas',
                  {
                    [`offcanvas-${props.placement}`]: props.placement,
                  },
                ],
                ref: offcanvasRef,
                role: 'dialog',
              },
              slots.default && slots.default(),
            ),
            [[vVisible, props.visible]],
          ),
      ),
      props.backdrop &&
        h(CBackdrop, {
          class: 'offcanvas-backdrop',
          visible: visible.value,
        }),
    ]
  },
})

export { COffcanvas }
