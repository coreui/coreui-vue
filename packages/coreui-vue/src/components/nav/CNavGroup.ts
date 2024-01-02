import { defineComponent, h, onMounted, ref, RendererElement, Transition, watch } from 'vue'

import { executeAfterTransition } from '../../utils/transition'

const CNavGroup = defineComponent({
  name: 'CNavGroup',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'li',
    },
    /**
     * Make nav group more compact by cutting all `padding` in half.
     */
    compact: Boolean,
    /**
     * Show nav group items.
     */
    visible: Boolean,
  },
  emits: ['visible-change'],
  setup(props, { slots, emit }) {
    const visible = ref()
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
      visible.value = props.visible
      props.visible && navGroupRef.value.classList.add('show')
      emit('visible-change', visible.value)
    })

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible

        if (visible.value === false) {
          visibleGroup.value = undefined
        }
      },
    )

    watch(visible, () => {
      emit('visible-change', visible.value)
    })

    const handleTogglerClick = () => {
      visible.value = !visible.value
      emit('visible-change', visible.value)
    }

    const handleBeforeEnter = (el: RendererElement) => {
      el.style.height = '0px'
      navGroupRef.value.classList.add('show')
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleEnter = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      el.style.height = `${el.scrollHeight}px`
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleAfterEnter = (el: RendererElement) => {
      el.style.height = 'auto'
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleBeforeLeave = (el: RendererElement) => {
      el.style.height = `${el.scrollHeight}px`
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const handleLeave = (el: RendererElement, done: () => void) => {
      executeAfterTransition(() => done(), el as HTMLElement)
      setTimeout(() => {
        el.style.height = '0px'
      }, 1)
    }

    const handleAfterLeave = () => {
      navGroupRef.value.classList.remove('show')
    }

    return () =>
      h(
        props.as,
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
                  props.as === 'div' ? 'div' : 'ul',
                  {
                    class: [
                      'nav-group-items',
                      {
                        compact: props.compact,
                      },
                    ],
                  },
                  slots.default &&
                    slots.default().map((vnode, index) => {
                      // @ts-expect-error name is defined in component
                      if (vnode.type.name === 'CNavGroup') {
                        return h(vnode, {
                          onVisibleChange: (visible: boolean) =>
                            handleVisibleChange(visible, index + 1),
                          ...(visibleGroup.value && { visible: isVisible(index + 1) }),
                        })
                      }
                      return vnode
                    }),
                ),
            },
          ),
        ],
      )
  },
})

export { CNavGroup }
