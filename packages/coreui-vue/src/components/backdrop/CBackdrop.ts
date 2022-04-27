import { defineComponent, h, RendererElement, Transition } from 'vue'

import { executeAfterTransition } from './../../utils/transition'

const CBackdrop = defineComponent({
  name: 'CBackdrop',
  props: {
    /**
     * Toggle the visibility of modal component.
     */
    visible: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props) {
    const handleBeforeEnter = (el: RendererElement) => {
      el.classList.remove('d-none')
    }

    const handleEnter = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      setTimeout(() => {
        el.style.visibility = 'visible'
        el.classList.add('show')
      }, 1)
    }

    const handleLeave = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      el.classList.remove('show')
    }

    const handleAfterLeave = (el: RendererElement) => {
      el.classList.add('d-none')
    }

    return () =>
      h(
        Transition,
        {
          onBeforeEnter: (el) => handleBeforeEnter(el),
          onEnter: (el, done) => handleEnter(el, done),
          onLeave: (el, done) => handleLeave(el, done),
          onAfterLeave: (el) => handleAfterLeave(el),
        },
        () =>
          props.visible &&
          h('div', {
            class: 'fade',
          }),
      )
  },
})

export { CBackdrop }
