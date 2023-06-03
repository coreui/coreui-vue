import { defineComponent, h, Transition } from 'vue'

const CBackdrop = defineComponent({
  name: 'CBackdrop',
  props: {
    /**
     * Toggle the visibility of modal component.
     */
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () =>
      h(
        Transition,
        {
          onEnter: (el) => {
            el.classList.add('show')
          },
          onLeave: (el) => {
            el.classList.remove('show')
          },
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
