import { defineComponent, h, ref, RendererElement, Transition, vShow, withDirectives } from 'vue'

import { executeAfterTransition } from './../../utils/transition'

const CTabPane = defineComponent({
  name: 'CTabPane',
  props: {
    /**
     * Toggle the visibility of component.
     */
    visible: {
      type: Boolean,
      default: false,
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
    const tabPaneRef = ref()
    const firstRender = ref(true)

    const handleEnter = (el: RendererElement, done: () => void) => {
      firstRender.value = false
      emit('show')
      setTimeout(() => {
        executeAfterTransition(() => done(), el as HTMLElement)
        el.classList.add('show')
      }, 1)
    }

    const handleLeave = (el: RendererElement, done: () => void) => {
      firstRender.value = false
      emit('hide')
      el.classList.remove('show')
      executeAfterTransition(() => done(), el as HTMLElement)
    }

    return () =>
      h(
        Transition,
        {
          onEnter: (el, done) => handleEnter(el, done),
          onLeave: (el, done) => handleLeave(el, done),
        },
        () =>
          withDirectives(
            h(
              'div',
              {
                class: [
                  'tab-pane',
                  'fade',
                  {
                    active: props.visible,
                    show: firstRender.value && props.visible,
                  },
                ],
                ref: tabPaneRef,
              },
              slots.default && slots.default(),
            ),
            [[vShow, props.visible]],
          ),
      )
  },
})

export { CTabPane }
