import {
  cloneVNode,
  defineComponent,
  ref,
  watch,
  onMounted,
  onUnmounted,
  type Ref,
  type PropType,
} from 'vue'
import { focusableChildren } from './utils'

const CFocusTrap = defineComponent({
  name: 'CFocusTrap',
  props: {
    /**
     * Controls whether the focus trap is active or inactive.
     * When `true`, focus will be trapped within the child element.
     * When `false`, normal focus behavior is restored.
     */
    active: {
      type: Boolean,
      default: true,
    },

    /**
     * Additional container elements to include in the focus trap.
     * Useful for floating elements like tooltips or popovers that are
     * rendered outside the main container but should be part of the trap.
     */
    additionalContainer: {
      type: Object as PropType<Ref<HTMLElement | null>>,
      default: undefined,
    },

    /**
     * Controls whether to focus the first selectable element or the container itself.
     * When `true`, focuses the first tabbable element within the container.
     * When `false`, focuses the container element directly.
     *
     * This is useful for containers that should receive focus themselves,
     * such as scrollable regions or custom interactive components.
     */
    focusFirstElement: {
      type: Boolean,
      default: false,
    },

    /**
     * Automatically restores focus to the previously focused element when the trap is deactivated.
     * This is crucial for accessibility as it maintains the user's place in the document
     * when returning from modal dialogs or overlay components.
     *
     * Recommended to be `true` for modal dialogs and popover components.
     */
    restoreFocus: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    /**
     * Emitted when the focus trap becomes active.
     * Useful for triggering additional accessibility announcements or analytics.
     */
    activate: () => true,
    /**
     * Emitted when the focus trap is deactivated.
     * Can be used for cleanup, analytics, or triggering state changes.
     */
    deactivate: () => true,
  },
  setup(props, { emit, slots, expose }) {
    const containerRef = ref<HTMLElement | null>(null)
    const prevFocusedRef = ref<HTMLElement | null>(null)
    const isActiveRef = ref<boolean>(false)
    const lastTabNavDirectionRef = ref<'forward' | 'backward'>('forward')
    const tabEventSourceRef = ref<HTMLElement | null>(null)

    let handleKeyDown: ((event: KeyboardEvent) => void) | null = null
    let handleFocusIn: ((event: FocusEvent) => void) | null = null

    const activateTrap = () => {
      const container = containerRef.value
      const additionalContainer = props.additionalContainer?.value || null

      if (!container) {
        return
      }

      prevFocusedRef.value = document.activeElement as HTMLElement | null

      // Activating...
      isActiveRef.value = true

      // Set initial focus
      if (props.focusFirstElement) {
        const elements = focusableChildren(container)
        if (elements.length > 0) {
          elements[0].focus({ preventScroll: true })
        } else {
          // Fallback to container if no focusable elements
          container.focus({ preventScroll: true })
        }
      } else {
        container.focus({ preventScroll: true })
      }

      emit('activate')

      // Create event handlers
      handleFocusIn = (event: FocusEvent) => {
        // Only handle focus events from tab navigation
        if (containerRef.value !== tabEventSourceRef.value) {
          return
        }

        const target = event.target as Node

        // Allow focus within container
        if (target === document || target === container || container.contains(target)) {
          return
        }

        // Allow focus within additional elements
        if (
          additionalContainer &&
          (target === additionalContainer || additionalContainer.contains(target))
        ) {
          return
        }

        // Focus escaped, bring it back
        const elements = focusableChildren(container)

        if (elements.length === 0) {
          container.focus({ preventScroll: true })
        } else if (lastTabNavDirectionRef.value === 'backward') {
          elements.at(-1)?.focus({ preventScroll: true })
        } else {
          elements[0].focus({ preventScroll: true })
        }
      }

      handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') {
          return
        }

        tabEventSourceRef.value = container
        lastTabNavDirectionRef.value = event.shiftKey ? 'backward' : 'forward'

        if (!additionalContainer) {
          return
        }

        const containerElements = focusableChildren(container)
        const additionalElements = focusableChildren(additionalContainer)

        if (containerElements.length === 0 && additionalElements.length === 0) {
          // No focusable elements, prevent tab
          event.preventDefault()
          return
        }

        const activeElement = document.activeElement as HTMLElement
        const isInContainer = containerElements.includes(activeElement)
        const isInAdditional = additionalElements.includes(activeElement)

        // Handle tab navigation between container and additional elements
        if (isInContainer) {
          const index = containerElements.indexOf(activeElement)

          if (
            !event.shiftKey &&
            index === containerElements.length - 1 &&
            additionalElements.length > 0
          ) {
            // Tab forward from last container element to first additional element
            event.preventDefault()
            additionalElements[0].focus({ preventScroll: true })
          } else if (event.shiftKey && index === 0 && additionalElements.length > 0) {
            // Tab backward from first container element to last additional element
            event.preventDefault()
            additionalElements.at(-1)?.focus({ preventScroll: true })
          }
        } else if (isInAdditional) {
          const index = additionalElements.indexOf(activeElement)

          if (
            !event.shiftKey &&
            index === additionalElements.length - 1 &&
            containerElements.length > 0
          ) {
            // Tab forward from last additional element to first container element
            event.preventDefault()
            containerElements[0].focus({ preventScroll: true })
          } else if (event.shiftKey && index === 0 && containerElements.length > 0) {
            // Tab backward from first additional element to last container element
            event.preventDefault()
            containerElements.at(-1)?.focus({ preventScroll: true })
          }
        }
      }

      // Add event listeners
      container.addEventListener('keydown', handleKeyDown, true)
      if (additionalContainer) {
        additionalContainer.addEventListener('keydown', handleKeyDown, true)
      }
      document.addEventListener('focusin', handleFocusIn, true)
    }

    const deactivateTrap = () => {
      if (!isActiveRef.value) {
        return
      }

      // Cleanup event listeners
      const container = containerRef.value
      const additionalContainer = props.additionalContainer?.value || null

      if (container && handleKeyDown) {
        container.removeEventListener('keydown', handleKeyDown, true)
      }
      if (additionalContainer && handleKeyDown) {
        additionalContainer.removeEventListener('keydown', handleKeyDown, true)
      }
      if (handleFocusIn) {
        document.removeEventListener('focusin', handleFocusIn, true)
      }

      // Restore focus
      if (props.restoreFocus && prevFocusedRef.value?.isConnected) {
        prevFocusedRef.value.focus({ preventScroll: true })
      }

      emit('deactivate')
      isActiveRef.value = false
      prevFocusedRef.value = null
    }

    watch(
      () => props.active,
      (newActive) => {
        if (newActive && containerRef.value) {
          activateTrap()
        } else {
          deactivateTrap()
        }
      },
      { immediate: false }
    )

    watch(
      () => props.additionalContainer?.value,
      () => {
        if (props.active && isActiveRef.value) {
          // Reactivate to update event listeners
          deactivateTrap()
          activateTrap()
        }
      }
    )

    onMounted(() => {
      if (props.active && containerRef.value) {
        activateTrap()
      }
    })

    onUnmounted(() => {
      deactivateTrap()
    })

    // Expose containerRef for parent components
    expose({
      containerRef,
    })

    return () => {
      const vnodes = slots.default?.()
      const vnode = vnodes?.[0]
      if (!vnode) return null
    
      const originalRef = (vnode.props as any)?.ref
    
      return cloneVNode(vnode, {
        ref: (el) => {
          containerRef.value = el as HTMLElement | null
    
          if (typeof originalRef === 'function') {
            originalRef(el)
          } else if (originalRef && typeof originalRef === 'object' && 'value' in originalRef) {
            ;(originalRef as { value: any }).value = el
          }
        },
      })
    }
  },
})

export { CFocusTrap }
