import { defineComponent, h, ref, provide, watch, PropType } from 'vue'
import type { Placement } from '@popperjs/core'

import { usePopper } from '../../composables'
import type { Placements, Triggers } from '../../types'
import { isRTL } from '../../utils'

export type Directions = 'start' | 'end'

export type Breakpoints =
  | { xs: Directions }
  | { sm: Directions }
  | { md: Directions }
  | { lg: Directions }
  | { xl: Directions }
  | { xxl: Directions }

export type Alignments = Directions | Breakpoints

const getPlacement = (
  placement: Placement,
  direction: string | undefined,
  alignment: Alignments | string | undefined,
  isRTL: boolean,
): Placements => {
  let _placement = placement

  if (direction === 'dropup') {
    _placement = isRTL ? 'top-end' : 'top-start'
  }

  if (direction === 'dropup-center') {
    _placement = 'top'
  }

  if (direction === 'dropend') {
    _placement = isRTL ? 'left-start' : 'right-start'
  }

  if (direction === 'dropstart') {
    _placement = isRTL ? 'right-start' : 'left-start'
  }

  if (alignment === 'end') {
    _placement = isRTL ? 'bottom-start' : 'bottom-end'
  }

  return _placement
}

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
        emit('show')
        return
      }

      popper.value && destroyPopper()
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('keyup', handleKeyup)
      emit('hide')
    })

    provide('config', {
      alignment: props.alignment,
      dark: props.dark,
      popper: props.popper,
    })

    provide('variant', props.variant)
    provide('visible', visible)
    provide('dropdownToggleRef', dropdownToggleRef)
    provide('dropdownMenuRef', dropdownMenuRef)

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
