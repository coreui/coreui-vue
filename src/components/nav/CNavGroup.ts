import { defineComponent, h, onMounted, onUpdated, ref, RendererElement, Transition } from 'vue'

const CNavGroup = defineComponent({
  name: 'CNavGroup',
  props: {
    /**
     * Show nav group items.
     */
    visible: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ['visibleChange'],
  setup(props, { emit, slots }) {
    const visible = ref(props.visible)
    const navGroupRef = ref()

    const visibleGroup = ref()

    const handleVisibleChange = (visible: boolean, index: number) => {
      if (visible) {
        visibleGroup.value = index
      } else {
        if (visibleGroup.value === index) {
          visibleGroup.value = 0
        }
      }
    }

    const isVisible = (index: number) => Boolean(visibleGroup.value === index)

    onMounted(() => {
      props.visible && navGroupRef.value.classList.add('show')
    })

    onUpdated(() => {
      visible.value = props.visible

      if (visible.value === false) {
        visibleGroup.value = undefined
      }
    })

    const handleTogglerClick = function () {
      visible.value = !visible.value
      emit('visibleChange', visible.value)
    }
    const handleBeforeEnter = (el: RendererElement) => {
      el.style.height = '0px'
      navGroupRef.value.classList.add('show')
    }
    const handleEnter = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      el.style.height = `${el.scrollHeight}px`
    }
    const handleAfterEnter = (el: RendererElement) => {
      el.style.height = 'auto'
    }
    const handleBeforeLeave = (el: RendererElement) => {
      el.style.height = `${el.scrollHeight}px`
    }
    const handleLeave = (el: RendererElement, done: () => void) => {
      el.addEventListener('transitionend', () => {
        done()
      })
      setTimeout(() => {
        el.style.height = '0px'
      }, 1)
    }
    const handleAfterLeave = () => {
      navGroupRef.value.classList.remove('show')
    }

    return () =>
      h(
        'li',
        {
          class: 'nav-group',
          ref: navGroupRef,
        },
        [
          slots.togglerContent &&
            h(
              'a',
              {
                class: ['nav-link', 'nav-group-toggle'],
                onClick: handleTogglerClick,
              },
              slots.togglerContent && slots.togglerContent(),
            ),
          h(
            Transition,
            {
              css: false,
              onBeforeEnter: (el) => handleBeforeEnter(el),
              onEnter: (el, done) => handleEnter(el, done),
              onAfterEnter: (el) => handleAfterEnter(el),
              onBeforeLeave: (el) => handleBeforeLeave(el),
              onLeave: (el, done) => handleLeave(el, done),
              onAfterLeave: () => handleAfterLeave(),
            },
            {
              default: () =>
                visible.value &&
                h(
                  'ul',
                  {
                    class: 'nav-group-items',
                  },
                  slots.default &&
                    slots.default().map((vnode, index) =>
                      h(vnode, {
                        onVisibleChange: (visible: boolean) => handleVisibleChange(visible, index),
                        visible: isVisible(index),
                      }),
                    ),
                ),
            },
          ),
        ],
      )
  },
})

export { CNavGroup }
