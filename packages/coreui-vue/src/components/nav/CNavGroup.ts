import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  provide,
  Ref,
  ref,
  RendererElement,
  Transition,
  useId,
  vShow,
  watch,
  withDirectives,
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
     * Show nav group items. Acts as the initial state on its own, or as the controlled value
     * when paired with a `v-model:visible` / `@update:visible` listener.
     */
    visible: {
      type: Boolean,
      default: undefined,
    },
  },
  emits: ['update:visible', 'visible-change'],
  setup(props, { slots, emit }) {
    const key = useId()
    const instance = getCurrentInstance()
    const hasUpdateListener = Boolean(instance?.vnode.props?.['onUpdate:visible'])

    const parentActiveKey = inject<Ref<string | undefined> | undefined>(
      'cNavGroupActiveKey',
      undefined
    )
    const parentSetActiveKey = inject<((key?: string) => void) | undefined>(
      'cNavGroupSetActiveKey',
      undefined
    )
    const parentOpenBranch = inject<(() => void) | undefined>('cNavGroupOpenBranch', undefined)

    const controlled = computed(() => props.visible !== undefined && hasUpdateListener)

    const internal = ref(Boolean(props.visible))

    const visible = computed(() => {
      if (controlled.value) {
        return props.visible as boolean
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

    const openBranch = () => {
      parentSetActiveKey?.(key)
      parentOpenBranch?.()
    }
    provide('cNavGroupOpenBranch', openBranch)

    // Seed the accordion / local state from the `visible` prop: opens default-open groups and
    // follows later changes (and keeps controlled groups in sync). Watching `props.visible`
    // keeps this from re-running on accordion changes, so a default-open group can be collapsed
    // manually.
    watch(
      () => props.visible,
      (value) => {
        if (value === undefined) {
          return
        }

        if (parentSetActiveKey) {
          if (value) {
            parentSetActiveKey(key)
          } else if (parentActiveKey && parentActiveKey.value === key) {
            parentSetActiveKey(undefined)
          }
        } else {
          internal.value = value
        }
      },
      { immediate: true }
    )

    // The items stay mounted (so nested active links can open their ancestors), so the `show`
    // class drives their visibility. Add it as soon as the group is visible; the leave
    // transition removes it after the collapse finishes (`handleAfterLeave`).
    const showClass = ref(visible.value)
    watch(visible, (value) => {
      if (value) {
        showClass.value = true
      }
    })

    // Accordion: when another branch opens, a controlled group must close too. As its
    // visibility is owned by the parent, request the change through `update:visible`.
    watch(
      () => parentActiveKey?.value,
      (activeKey) => {
        if (!controlled.value || !props.visible) {
          return
        }

        if (activeKey !== undefined && activeKey !== key) {
          emit('update:visible', false)
        }
      }
    )

    watch(visible, (value) => {
      emit('visible-change', value)
    })

    const handleTogglerClick = (event: Event) => {
      event.preventDefault()

      const next = !visible.value
      emit('update:visible', next)

      if (controlled.value) {
        return
      }

      if (parentSetActiveKey) {
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
              slots.togglerContent && slots.togglerContent()
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
                withDirectives(
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
                    slots.default && slots.default()
                  ),
                  [[vShow, visible.value]]
                ),
            }
          ),
        ]
      )
  },
})

export { CNavGroup }
