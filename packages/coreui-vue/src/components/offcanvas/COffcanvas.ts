import { defineComponent, h, ref, RendererElement, Transition, watch, withDirectives } from 'vue'

import { CBackdrop } from '../backdrop'

import { vVisible } from '../../directives/v-c-visible'
import { executeAfterTransition } from '../../utils/transition'

const COffcanvas = defineComponent({
  name: 'COffcanvas',
  inheritAttrs: false,
  props: {
    /**
     * Apply a backdrop on body while offcanvas is open.
     *
     * @values boolean | 'static'
     */
    backdrop: {
      type: [Boolean, String],
      default: true,
      validator: (value: boolean | string) => {
        if (typeof value === 'string') {
          return ['static'].includes(value)
        }
        if (typeof value === 'boolean') {
          return true
        }
        return false
      },
    },
    /**
     * Sets a darker color scheme.
     */
    dark: Boolean,
    /**
     * Closes the offcanvas when escape key is pressed.
     */
    keyboard: {
      type: Boolean,
      default: true,
    },
    /**
     * Components placement, there’s no default placement.
     *
     * @values 'start', 'end', 'top', 'bottom'
     */
    placement: {
      type: String,
      require: true,
      validator: (value: string) => {
        return ['start', 'end', 'top', 'bottom'].includes(value)
      },
    },
    /**
     * Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down.
     *
     * @values boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
     * @since 4.7.0
     */
    responsive: {
      type: [Boolean, String],
      default: true,
      validator: (value: boolean | string) => {
        if (typeof value === 'string') {
          return ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
        }
        if (typeof value === 'boolean') {
          return true
        }
        return false
      },
    },
    /**
     * Allow body scrolling while offcanvas is open
     */
    scroll: {
      type: Boolean,
      default: false,
    },

    /**
     * Toggle the visibility of offcanvas component.
     */
    visible: {
      type: Boolean,
      default: false,
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
  setup(props, { attrs, emit, slots }) {
    const offcanvasRef = ref()
    const visible = ref(props.visible)

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      },
    )

    watch(visible, () => {
      if (visible.value && !props.scroll) {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = '0px'

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
        el.classList.add('show')
      }, 1)
    }

    const handleAfterEnter = () => {
      offcanvasRef.value.focus()
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleLeave = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      el.classList.add('hiding')
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleAfterLeave = (el: RendererElement) => {
      el.classList.remove('show', 'hiding')
    }

    const handleDismiss = () => {
      visible.value = false
      emit('hide')
    }

    const handleBackdropDismiss = () => {
      if (props.backdrop !== 'static') {
        handleDismiss()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.keyboard) {
        handleDismiss()
      }
    }

    return () => [
      h(
        Transition,
        {
          appear: visible.value,
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
                ...attrs,
                class: [
                  {
                    [`offcanvas${
                      typeof props.responsive === 'boolean' ? '' : '-' + props.responsive
                    }`]: props.responsive,
                    [`offcanvas-${props.placement}`]: props.placement,
                  },
                  attrs.class,
                ],
                onKeydown: (event: KeyboardEvent) => handleKeyDown(event),
                ref: offcanvasRef,
                role: 'dialog',
                tabindex: -1,
                ...(props.dark && { 'data-coreui-theme': 'dark' }),
              },
              slots.default && slots.default(),
            ),
            [[vVisible, props.visible]],
          ),
      ),
      props.backdrop &&
        h(CBackdrop, {
          class: 'offcanvas-backdrop',
          onClick: handleBackdropDismiss,
          visible: visible.value,
        }),
    ]
  },
})

export { COffcanvas }
