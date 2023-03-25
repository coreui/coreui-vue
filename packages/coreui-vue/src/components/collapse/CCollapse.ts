import { defineComponent, h, Transition, ref, RendererElement, withDirectives } from 'vue'

import { vVisible } from '../../directives/v-c-visible'
import { executeAfterTransition } from '../../utils/transition'

const CCollapse = defineComponent({
  name: 'CCollapse',
  props: {
    /**
     * Set horizontal collapsing to transition the width instead of height.
     */
    horizontal: Boolean,
    /**
     * Toggle the visibility of component.
     */
    visible: Boolean,
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
    const collapsing = ref(false)
    const show = ref(props.visible)

    const handleBeforeEnter = () => {
      collapsing.value = true
    }

    const handleEnter = (el: RendererElement, done: () => void) => {
      emit('show')
      // collapsing.value = true
      setTimeout(() => {
        executeAfterTransition(() => done(), el as HTMLElement)
        if (props.horizontal) {
          el.style.width = `${el.scrollWidth}px`
          return
        }
        el.style.height = `${el.scrollHeight}px`
      }, 1)
    }

    const handleAfterEnter = (el: RendererElement) => {
      show.value = true
      collapsing.value = false
      props.horizontal ? el.style.removeProperty('width') : el.style.removeProperty('height')
    }

    const handleBeforeLeave = (el: RendererElement) => {
      collapsing.value = true
      show.value = false
      if (props.horizontal) {
        el.style.width = `${el.scrollWidth}px`
        return
      }
      el.style.height = `${el.scrollHeight}px`
    }

    const handleLeave = (el: RendererElement, done: () => void) => {
      emit('hide')
      setTimeout(() => {
        executeAfterTransition(() => done(), el as HTMLElement)
        if (props.horizontal) {
          el.style.width = '0px'
          return
        }
        el.style.height = '0px'
      }, 1)
    }

    const handleAfterLeave = (el: RendererElement) => {
      collapsing.value = false
      props.horizontal ? el.style.removeProperty('width') : el.style.removeProperty('height')
    }

    return () =>
      h(
        Transition,
        {
          css: false,
          onBeforeEnter: () => handleBeforeEnter(),
          onEnter: (el, done) => handleEnter(el, done),
          onAfterEnter: (el) => handleAfterEnter(el),
          onBeforeLeave: (el) => handleBeforeLeave(el),
          onLeave: (el, done) => handleLeave(el, done),
          onAfterLeave: (el) => handleAfterLeave(el),
        },
        () =>
          withDirectives(
            h(
              'div',
              {
                class: [
                  collapsing.value ? 'collapsing' : 'collapse',
                  { 'collapse-horizontal': props.horizontal, show: show.value },
                ],
              },
              slots.default && slots.default(),
            ),
            [[vVisible, props.visible]],
          ),
      )
  },
})

export { CCollapse }
