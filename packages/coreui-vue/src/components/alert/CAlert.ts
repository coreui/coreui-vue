import { defineComponent, h, ref, RendererElement, Transition, watch } from 'vue'

import { CCloseButton } from '../close-button'

import { Color } from '../../props'
import { executeAfterTransition } from '../../utils/transition'

const handleEnter = (el: RendererElement, done: () => void) => {
  executeAfterTransition(() => done(), el as HTMLElement)
  setTimeout(() => {
    el.classList.add('show')
  }, 1)
}

const handleLeave = (el: RendererElement, done: () => void) => {
  el.classList.remove('show')
  executeAfterTransition(() => done(), el as HTMLElement)
}

export const CAlert = defineComponent({
  name: 'CAlert',
  inheritAttrs: false,
  props: {
    /**
     * Sets the `aria-label` of the dismissible close button.
     *
     * @since 5.10.0
     */
    ariaCloseLabel: {
      type: String,
      default: 'Close',
    },
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
     * Set whether the alert fades in and out when it is shown and hidden. Set to `false` to make it appear and disappear without a fade animation.
     *
     * @since 5.10.0
     */
    transition: {
      type: Boolean,
      default: true,
    },
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
     * Event fired when the component requests to be closed.
     */
    'close',
    /**
     * Event fired after the alert has been closed and the CSS transition has completed.
     *
     * @since 5.10.0
     */
    'closed',
  ],
  setup(props, { attrs, slots, emit }) {
    const alertRef = ref<HTMLDivElement>()
    const visible = ref(props.visible)

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      }
    )

    const handleAfterLeave = () => {
      emit('closed')
    }

    const handleDismiss = () => {
      emit('close')
      visible.value = false
    }

    return () =>
      h(
        Transition,
        {
          appear: true,
          css: false,
          onEnter: (el, done) => handleEnter(el, done),
          onLeave: (el, done) => handleLeave(el, done),
          onAfterLeave: () => handleAfterLeave(),
        },
        {
          default: () =>
            visible.value &&
            h(
              'div',
              {
                ...attrs,
                class: [
                  'alert',
                  props.variant === 'solid'
                    ? `bg-${props.color} text-white border-0`
                    : `alert-${props.color}`,
                  {
                    [`alert-${props.color}`]: props.color,
                    'alert-dismissible': props.dismissible,
                    fade: props.transition,
                  },
                  attrs.class,
                ],
                ref: alertRef,
              },
              [
                slots.default && slots.default(),
                props.dismissible &&
                  h(CCloseButton, {
                    'aria-label': props.ariaCloseLabel,
                    onClick: () => {
                      handleDismiss()
                    },
                  }),
              ]
            ),
        }
      )
  },
})
