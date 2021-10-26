import { defineComponent, h, Transition, withDirectives, vShow, RendererElement } from 'vue'

const CCollapse = defineComponent({
  name: 'CCollapse',
  props: {
    /**
     * Toggle the visibility of component.
     */
    visible: {
      type: Boolean,
      required: false,
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
    const handleBeforeEnter = (el: RendererElement) => {
      el.classList.remove('collapse')
      el.classList.add('collapsing')
    }
    const handleEnter = (el: RendererElement, done: () => void) => {
      emit('show')
      el.addEventListener('transitionend', () => {
        el.classList.add('collapse', 'show')
        done()
      })
      el.style.height = `${el.scrollHeight}px`
    }
    const handleAfterEnter = (el: RendererElement) => {
      el.classList.remove('collapsing')
      el.style.removeProperty('height')
    }
    const handleBeforeLeave = (el: RendererElement) => {
      el.classList.add('show')
      el.style.height = `${el.scrollHeight}px`
    }
    const handleLeave = (el: RendererElement, done: () => void) => {
      emit('hide')
      el.classList.remove('collapse', 'show')
      el.classList.add('collapsing')
      el.addEventListener('transitionend', () => {
        done()
      })
      el.style.height = '0px'
    }
    const handleAfterLeave = (el: RendererElement) => {
      el.classList.remove('collapsing')
      el.classList.add('collapse')
    }

    return () =>
      h(
        Transition,
        {
          name: 'fade',
          onBeforeEnter: (el) => handleBeforeEnter(el),
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
                  'collapse',
                  {
                    show: props.visible,
                  },
                ],
              },
              slots.default && slots.default(),
            ),
            [[vShow, props.visible]],
          ),
      )
  },
})

export { CCollapse }
