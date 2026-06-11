import {
  computed,
  defineComponent,
  h,
  inject,
  onMounted,
  provide,
  Ref,
  ref,
  RendererElement,
  Transition,
  useId,
  watch,
} from 'vue'

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
    visible: {
      type: Boolean,
      default: undefined,
    },
  },
  emits: ['update:visible', 'visible-change'],
  setup(props, { slots, emit }) {
    const key = useId()

    const parentActiveKey = inject<Ref<string | undefined> | undefined>(
      'cNavGroupActiveKey',
      undefined,
    )
    const parentSetActiveKey = inject<((key?: string) => void) | undefined>(
      'cNavGroupSetActiveKey',
      undefined,
    )

    const internal = ref(Boolean(props.visible))

    const visible = computed(() => {
      if (props.visible !== undefined) {
        return props.visible
      }

      if (parentActiveKey) {
        return parentActiveKey.value === key
      }

      return internal.value
    })

    const activeGroupKey = ref<string>()
    provide('cNavGroupActiveKey', activeGroupKey)
    provide('cNavGroupSetActiveKey', (value?: string) => {
      activeGroupKey.value = value
    })

    const showClass = ref(visible.value)

    onMounted(() => {
      if (props.visible && parentSetActiveKey) {
        parentSetActiveKey(key)
      }
    })

    watch(visible, (value) => {
      if (props.visible !== undefined && parentSetActiveKey) {
        if (value) {
          parentSetActiveKey(key)
        } else if (parentActiveKey && parentActiveKey.value === key) {
          parentSetActiveKey(undefined)
        }
      }

      emit('visible-change', value)
    })

    const handleTogglerClick = (event: Event) => {
      event.preventDefault()

      const next = !visible.value
      emit('update:visible', next)

      if (props.visible !== undefined) {
        return
      }

      if (parentActiveKey && parentSetActiveKey) {
        parentSetActiveKey(next ? key : undefined)
      } else {
        internal.value = next
      }
    }

    const handleBeforeEnter = (el: RendererElement) => {
      el.style.height = '0px'
      showClass.value = true
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
      showClass.value = false
    }

    return () =>
      h(
        props.as,
        {
          class: ['nav-group', { show: showClass.value }],
        },
        [
          slots.togglerContent &&
            h(
              'a',
              {
                'aria-expanded': visible.value,
                class: ['nav-link', 'nav-group-toggle'],
                href: '#',
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
                  slots.default && slots.default(),
                ),
            },
          ),
        ],
      )
  },
})

export { CNavGroup }
