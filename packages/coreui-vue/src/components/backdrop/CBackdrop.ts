import { defineComponent, h, RendererElement, Transition } from 'vue'

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
      el.addEventListener('transitionend', () => {
        done()
      })
      setTimeout(() => {
        el.style.visibility = 'visible'
        el.classList.add('show')
      }, 1)
    }
    const handleLeave = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      el.classList.remove('show')
      el.style.visibility = 'hidden'
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
