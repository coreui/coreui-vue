import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  provide,
  Ref,
  ref,
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

    const navGroupItemsRef = ref<HTMLElement>()

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

    // Animate the height of the always-mounted items, after the `show` class (driven straight
    // from `visible`, so the toggler indicator reacts immediately). `display` is forced while
    // collapsing to override the `.nav-group:not(.show) .nav-group-items { display: none }` rule.
    watch(
      visible,
      (value) => {
        emit('visible-change', value)

        const el = navGroupItemsRef.value
        if (!el) {
          return
        }

        el.style.display = 'block'

        // Each branch sets the starting height, forces a reflow by reading `offsetHeight`, then
        // sets the target height. The reflow makes the browser commit the starting value, so the
        // CSS height transition runs instead of both writes collapsing into a single frame.
        if (value) {
          el.style.height = '0px'
          el.offsetHeight // eslint-disable-line @typescript-eslint/no-unused-expressions
          el.style.height = `${el.scrollHeight}px`
          executeAfterTransition(() => {
            el.style.height = 'auto'
          }, el)
        } else {
          el.style.height = `${el.scrollHeight}px`
          el.offsetHeight // eslint-disable-line @typescript-eslint/no-unused-expressions
          el.style.height = '0px'
          executeAfterTransition(() => {
            el.style.display = ''
            el.style.height = ''
          }, el)
        }
      },
      { flush: 'post' }
    )

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

    return () =>
      h(
        props.as,
        {
          class: ['nav-group', { show: visible.value }],
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
              slots.togglerContent && slots.togglerContent({ visible: visible.value })
            ),
          h(
            props.as === 'div' ? 'div' : 'ul',
            {
              class: [
                'nav-group-items',
                {
                  compact: props.compact,
                },
              ],
              ref: navGroupItemsRef,
            },
            slots.default && slots.default()
          ),
        ]
      )
  },
})

export { CNavGroup }
