import { defineComponent, h, ref, provide, watch, PropType } from 'vue'
import type { Placement } from '@popperjs/core'

import { usePopper } from '../../composables'
import type { Triggers } from '../../types'
import { getNextActiveElement, isRTL } from '../../utils'

import type { Alignments } from './types'
import { getPlacement } from './utils'

const CDropdown = defineComponent({
  name: 'CDropdown',
  props: {
    /**
     * Set aligment of dropdown menu.
     *
     * @values { 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'} }
     */
    alignment: {
      type: [String, Object] as PropType<string | Alignments>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (value: string | any) => {
        if (value === 'start' || value === 'end') {
          return true
        } else {
          if (value.xs !== undefined && (value.xs === 'start' || value.xs === 'end')) {
            return true
          }
          if (value.sm !== undefined && (value.sm === 'start' || value.sm === 'end')) {
            return true
          }
          if (value.md !== undefined && (value.md === 'start' || value.md === 'end')) {
            return true
          }
          if (value.lg !== undefined && (value.lg === 'start' || value.lg === 'end')) {
            return true
          }
          if (value.xl !== undefined && (value.xl === 'start' || value.xl === 'end')) {
            return true
          }
          if (value.xxl !== undefined && (value.xxl === 'start' || value.xxl === 'end')) {
            return true
          }
          return false
        }
      },
    },
    /**
     * Configure the auto close behavior of the dropdown:
     * - `true` - the dropdown will be closed by clicking outside or inside the dropdown menu.
     * - `false` - the dropdown will be closed by clicking the toggle button and manually calling hide or toggle method. (Also will not be closed by pressing esc key)
     * - `'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu.
     * - `'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu.
     */
    autoClose: {
      type: [Boolean, String],
      default: true,
      validator: (value: boolean | string) => {
        return typeof value === 'boolean' || ['inside', 'outside'].includes(value)
      },
    },
    /**
     * Appends the vue dropdown menu to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`.
     *
     * @since 5.0.0
     */
    container: {
      type: [Object, String] as PropType<HTMLElement | (() => HTMLElement) | string>,
      default: 'body',
    },
    /**
     * Sets a darker color scheme to match a dark navbar.
     */
    dark: Boolean,
    /**
     * Sets a specified  direction and location of the dropdown menu.
     *
     * @values 'center', 'dropup', 'dropup-center', 'dropend', 'dropstart'
     */
    direction: {
      type: String,
      validator: (value: string) => {
        return ['center', 'dropup', 'dropup-center', 'dropend', 'dropstart'].includes(value)
      },
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * Offset of the dropdown menu relative to its target.
     *
     * @since 4.9.0
     */
    offset: {
      type: Array,
      default: () => [0, 2],
    },
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     *
     * @values 'auto', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'
     */
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-start',
    },
    /**
     * If you want to disable dynamic positioning set this property to `true`.
     */
    popper: {
      type: Boolean,
      default: true,
    },
    /**
     * Generates dropdown menu using Teleport.
     *
     * @since 5.0.0
     */
    teleport: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     */
    trigger: {
      type: String as PropType<Triggers>,
      default: 'click',
    },
    /**
     * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.
     *
     * @values 'btn-group', 'dropdown', 'input-group', 'nav-item'
     */
    variant: {
      type: String,
      default: 'btn-group',
      validator: (value: string) => {
        return ['btn-group', 'dropdown', 'input-group', 'nav-item'].includes(value)
      },
    },
    /**
     * Toggle the visibility of dropdown menu component.
     */
    visible: Boolean,
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
    const dropdownToggleRef = ref()
    const dropdownMenuRef = ref()
    const popper = ref(typeof props.alignment === 'object' ? false : props.popper)
    const visible = ref(props.visible)

    const { initPopper, destroyPopper } = usePopper()

    const popperConfig = {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: props.offset,
          },
        },
      ],
      placement: getPlacement(
        props.placement,
        props.direction,
        props.alignment,
        isRTL(dropdownMenuRef.value),
      ) as Placement,
    }

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible
      },
    )

    watch(visible, () => {
      if (visible.value && dropdownToggleRef.value && dropdownMenuRef.value) {
        popper.value && initPopper(dropdownToggleRef.value, dropdownMenuRef.value, popperConfig)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('keyup', handleKeyup)
        dropdownToggleRef.value.addEventListener('keydown', handleKeydown)
        dropdownMenuRef.value.addEventListener('keydown', handleKeydown)
        emit('show')
        return
      }

      popper.value && destroyPopper()
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('keyup', handleKeyup)
      dropdownToggleRef.value &&
        dropdownToggleRef.value.removeEventListener('keydown', handleKeydown)
      dropdownMenuRef.value && dropdownMenuRef.value.removeEventListener('keydown', handleKeydown)
      emit('hide')
    })

    provide('config', {
      alignment: props.alignment,
      container: props.container,
      dark: props.dark,
      popper: props.popper,
      teleport: props.teleport,
    })

    provide('variant', props.variant)
    provide('visible', visible)
    provide('dropdownToggleRef', dropdownToggleRef)
    provide('dropdownMenuRef', dropdownMenuRef)

    const handleKeydown = (event: KeyboardEvent) => {
      if (
        visible.value &&
        dropdownMenuRef.value &&
        (event.key === 'ArrowDown' || event.key === 'ArrowUp')
      ) {
        event.preventDefault()
        const target = event.target as HTMLElement
        // eslint-disable-next-line unicorn/prefer-spread
        const items: HTMLElement[] = Array.from(
          dropdownMenuRef.value.querySelectorAll('.dropdown-item:not(.disabled):not(:disabled)'),
        )
        getNextActiveElement(items, target, event.key === 'ArrowDown', true).focus()
      }
    }

    const handleKeyup = (event: KeyboardEvent) => {
      if (props.autoClose === false) {
        return
      }

      if (event.key === 'Escape') {
        setVisible(false)
      }
    }

    const handleMouseUp = (event: Event) => {
      if (!dropdownToggleRef.value || !dropdownMenuRef.value) {
        return
      }

      if (dropdownToggleRef.value.contains(event.target as HTMLElement)) {
        return
      }

      if (
        props.autoClose === true ||
        (props.autoClose === 'inside' &&
          dropdownMenuRef.value.contains(event.target as HTMLElement)) ||
        (props.autoClose === 'outside' &&
          !dropdownMenuRef.value.contains(event.target as HTMLElement))
      ) {
        setVisible(false)
        return
      }
    }

    const setVisible = (_visible?: boolean) => {
      if (props.disabled) {
        return
      }

      if (typeof _visible == 'boolean') {
        visible.value = _visible
        return
      }

      if (visible.value === true) {
        visible.value = false
        return
      }

      visible.value = true
    }

    provide('setVisible', setVisible)

    return () =>
      props.variant === 'input-group'
        ? [slots.default && slots.default()]
        : h(
            'div',
            {
              class: [
                props.variant === 'nav-item' ? 'nav-item dropdown' : props.variant,
                props.direction === 'center'
                  ? 'dropdown-center'
                  : props.direction === 'dropup-center'
                  ? 'dropup dropup-center'
                  : props.direction,
              ],
            },
            slots.default && slots.default(),
          )
  },
})

export { CDropdown }
