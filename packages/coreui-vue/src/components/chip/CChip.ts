import { computed, defineComponent, h, ref } from 'vue'

import { Color } from '../../props'

const SELECTOR_FOCUSABLE_ITEMS = '.chip[tabindex="0"]:not(.disabled)'

const CChip = defineComponent({
  name: 'CChip',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Provides an accessible label for the remove button.
     */
    ariaRemoveLabel: {
      type: String,
      default: 'Remove',
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'span',
    },
    /**
     * Enables interactive hover styling and pointer cursor.
     */
    clickable: Boolean,
    /**
     * Sets the color context of the component to one of CoreUI's themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * Displays a remove button inside the component.
     */
    removable: Boolean,
    /**
     * Replaces the default remove icon with a custom icon node.
     */
    removeIcon: {
      type: [String, Object],
      default: undefined,
    },
    /**
     * Enables selectable behavior and keyboard toggle support.
     */
    selectable: Boolean,
    /**
     * Controls the selected state of a selectable component.
     */
    selected: Boolean,
    /**
     * Size the component small or large.
     *
     * @values 'sm', 'lg'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Set the button variant to an outlined style.
     *
     * @values 'outline'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return value === 'outline'
      },
    },
  },
  emits: [
    /**
     * Event called when the user clicks on the component.
     */
    'click',
    /**
     * Event called when the component becomes deselected.
     */
    'deselect',
    /**
     * Event called when the user presses a key.
     */
    'keydown',
    /**
     * Event called when the component requests removal.
     */
    'remove',
    /**
     * Event called when the component becomes selected.
     */
    'select',
    /**
     * Event called when the selected state changes.
     */
    'selected-change',
  ],
  setup(props, { attrs, emit, slots, expose }) {
    const chipRef = ref<HTMLElement>()

    const internalSelected = ref(false)

    const selectedState = computed(() =>
      props.selected !== undefined ? Boolean(props.selected) : internalSelected.value
    )

    const isFocusable = computed(() => Boolean(!props.disabled && (props.selectable || props.removable)))

    const getFocusableSibling = (shouldGetNext: boolean): HTMLElement | null => {
      const currentElement = chipRef.value
      if (!currentElement?.parentElement) {
        return null
      }

      const chips = Array.from(
        currentElement.parentElement.querySelectorAll<HTMLElement>(SELECTOR_FOCUSABLE_ITEMS),
      )

      const index = chips.indexOf(currentElement as HTMLElement)
      if (index === -1 || chips.length <= 1) {
        return null
      }

      const targetIndex = shouldGetNext ? index + 1 : index - 1
      return chips[targetIndex] ?? null
    }

    const navigateToEdge = (targetIndex: 0 | -1): void => {
      const currentElement = chipRef.value
      if (!currentElement?.parentElement) {
        return
      }

      const chips = Array.from(
        currentElement.parentElement.querySelectorAll<HTMLElement>(SELECTOR_FOCUSABLE_ITEMS),
      )
      const edgeChip = targetIndex === -1 ? chips[chips.length - 1] : chips[0]
      edgeChip?.focus()
    }

    const setSelectableState = (
      nextSelected: boolean,
      event: MouseEvent | KeyboardEvent,
    ): void => {
      if (!props.selectable || props.disabled || nextSelected === selectedState.value) {
        return
      }

      if (props.selected === undefined) {
        internalSelected.value = nextSelected
      }

      if (nextSelected) {
        emit('select', event)
      } else {
        emit('deselect', event)
      }

      emit('selected-change', nextSelected, event)
    }

    const toggleSelectedState = (event: MouseEvent | KeyboardEvent): void => {
      setSelectableState(!selectedState.value, event)
    }

    const handleRemove = (event: MouseEvent | KeyboardEvent): void => {
      emit('remove', event)
    }

    const handleRemoveClick = (event: MouseEvent): void => {
      event.stopPropagation()
      handleRemove(event)
    }

    const handleClick = (event: MouseEvent): void => {
      if (props.disabled) {
        return
      }

      if ((event.target as HTMLElement).closest('.chip-remove')) {
        return
      }

      if (props.selectable) {
        toggleSelectedState(event)
      }

      emit('click', event)
    }

    const handleKeydown = (event: KeyboardEvent): void => {
      if (props.disabled) {
        emit('keydown', event)
        return
      }

      switch (event.key) {
        case 'Enter':
        case ' ':
        case 'Spacebar': {
          if (props.selectable) {
            event.preventDefault()
            toggleSelectedState(event)
          }
          break
        }

        case 'Backspace':
        case 'Delete': {
          if (props.removable) {
            event.preventDefault()
            const sibling = getFocusableSibling(false) || getFocusableSibling(true)
            sibling?.focus()
            handleRemove(event)
          }
          break
        }

        case 'ArrowLeft': {
          event.preventDefault()
          const sibling = getFocusableSibling(false)
          sibling?.focus()
          if (selectedState.value && event.shiftKey) {
            sibling?.dispatchEvent(new CustomEvent('coreui-chip-select'))
          }
          break
        }

        case 'ArrowRight': {
          event.preventDefault()
          const sibling = getFocusableSibling(true)
          sibling?.focus()
          if (selectedState.value && event.shiftKey) {
            sibling?.dispatchEvent(new CustomEvent('coreui-chip-select'))
          }
          break
        }

        case 'Home': {
          event.preventDefault()
          navigateToEdge(0)
          break
        }

        case 'End': {
          event.preventDefault()
          navigateToEdge(-1)
          break
        }

        // No default
      }

      emit('keydown', event)
    }

    expose({ chipRef })

    return () => {
      const removeIconVNode =
        slots.removeIcon?.() ||
        props.removeIcon ||
        h(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: 16,
            height: 16,
            viewBox: '0 0 16 16',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': 2,
            'stroke-linecap': 'round',
          },
          [
            h('line', { x1: 4, y1: 4, x2: 12, y2: 12 }),
            h('line', { x1: 12, y1: 4, x2: 4, y2: 12 }),
          ],
        )

      const children = [
        slots.default && slots.default(),
        props.removable &&
          h(
            'button',
            {
              type: 'button',
              class: 'chip-remove',
              'aria-label': props.ariaRemoveLabel,
              onClick: handleRemoveClick,
              tabindex: -1,
              disabled: props.disabled,
            },
            removeIconVNode,
          ),
      ].filter(Boolean)

      return h(
        props.as,
        {
          ref: chipRef,
          class: [
            'chip',
            {
              active: props.selectable ? selectedState.value : props.active,
              disabled: props.disabled,
              [`chip-${props.color}`]: props.color,
              [`chip-${props.size}`]: props.size,
              'chip-clickable': props.clickable || props.selectable || attrs.onClick,
              'chip-outline': props.variant === 'outline',
            },
            attrs.class,
          ],
          ...(props.disabled && { 'aria-disabled': true }),
          ...(props.selectable && { 'aria-selected': selectedState.value }),
          ...(isFocusable.value && !attrs.tabindex && { tabindex: 0 }),
          onClick: handleClick,
          onKeydown: handleKeydown,
          ...(props.as === 'button' && { disabled: props.disabled }),
        },
        children,
      )
    }
  },
})

export { CChip }
