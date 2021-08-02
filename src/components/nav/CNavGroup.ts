import { defineComponent, h, Transition, ref, RendererElement, onMounted } from 'vue'

const CNavGroup = defineComponent({
  name: 'CNavGroup',
  props: {
    /**
     * Show nav group items.
     */
    visible: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots }) {
    const visible = ref(props.visible)
    const navGroupRef = ref()

    onMounted(() => {
      props.visible && navGroupRef.value.classList.add('show')
    })

    const handleTogglerClick = function () {
      visible.value = !visible.value
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
                  slots.default && slots.default(),
                ),
            },
          ),
        ],
      )
  },
})

export { CNavGroup }
