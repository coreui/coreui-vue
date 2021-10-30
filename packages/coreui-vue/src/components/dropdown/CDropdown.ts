import {
  defineComponent,
  h,
  ref,
  onUnmounted,
  onMounted,
  provide,
  reactive,
  toRefs,
  watch,
  PropType,
} from 'vue'
import { createPopper, Placement } from '@popperjs/core'

const CDropdown = defineComponent({
  name: 'CDropdown',
  props: {
    /**
     * Set aligment of dropdown menu.
     *
     * @values { 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'} }
     */
    alignment: {
      type: [String, Object],
      default: undefined,
      required: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (value: string | any) => {
        if (value === 'start' || value === 'end') {
          return true
        } else {
          if (typeof value.xs !== 'undefined' && (value.xs === 'start' || value.xs === 'end')) {
            return true
          }
          if (typeof value.sm !== 'undefined' && (value.sm === 'start' || value.sm === 'end')) {
            return true
          }
          if (typeof value.md !== 'undefined' && (value.md === 'start' || value.md === 'end')) {
            return true
          }
          if (typeof value.lg !== 'undefined' && (value.lg === 'start' || value.lg === 'end')) {
            return true
          }
          if (typeof value.xl !== 'undefined' && (value.xl === 'start' || value.xl === 'end')) {
            return true
          }
          if (typeof value.xxl !== 'undefined' && (value.xxl === 'start' || value.xxl === 'end')) {
            return true
          }
          return false
        }
      },
    },
    /**
     * Sets a darker color scheme to match a dark navbar.
     */
    dark: {
      type: Boolean,
      required: false,
    },
    /**
     * Sets a specified  direction and location of the dropdown menu.
     *
     * @values 'dropup', 'dropend', 'dropstart'
     */
    direction: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['dropup', 'dropend', 'dropstart'].includes(value)
      },
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     *
     * @values 'auto', 'top-end', 'top', 'top-start', 'bottom-end', 'bottom', 'bottom-start', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end'
     */
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-start',
      required: false,
    },
    /**
     * If you want to disable dynamic positioning set this property to `true`.
     */
    popper: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     */
    trigger: {
      type: [String, Array],
      required: false,
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
      required: false,
      validator: (value: string) => {
        return ['btn-group', 'dropdown', 'input-group', 'nav-item'].includes(value)
      },
    },
    /**
     * Toggle the visibility of dropdown menu component.
     */
    visible: {
      type: Boolean,
      required: false,
    },
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
    const dropdownRef = ref()
    const dropdownMenuRef = ref()
    const placement = ref(props.placement)
    const popper = ref()

    const config = reactive({
      alignment: props.alignment,
      dark: props.dark,
      popper: props.popper,
      visible: props.visible,
    })

    const { visible } = toRefs(config)

    provide('config', config)

    provide('variant', props.variant)
    provide('visible', visible)
    provide('dropdownRef', dropdownRef)
    provide('dropdownMenuRef', dropdownMenuRef)

    if (props.direction === 'dropup') {
      placement.value = 'top-start'
    }
    if (props.direction === 'dropend') {
      placement.value = 'right-start'
    }
    if (props.direction === 'dropstart') {
      placement.value = 'left-start'
    }
    if (props.alignment === 'end') {
      placement.value = 'bottom-end'
    }

    const initPopper = () => {
      // Disable popper if responsive aligment is set.
      if (typeof props.alignment === 'object') {
        return
      }

      if (dropdownRef.value) {
        popper.value = createPopper(dropdownRef.value, dropdownMenuRef.value, {
          placement: placement.value,
        })
      }
    }

    const destroyPopper = () => {
      if (popper.value) {
        popper.value.destroy()
      }
      popper.value = undefined
    }

    const toggleMenu = function () {
      if (props.disabled === false) {
        if (visible.value === true) {
          visible.value = false
        } else {
          visible.value = true
        }
      }
    }

    provide('toggleMenu', toggleMenu)

    const hideMenu = function () {
      if (props.disabled === false) {
        visible.value = false
      }
    }

    const handleKeyup = (event: Event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target as HTMLElement)) {
        hideMenu()
      }
    }
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target as HTMLElement)) {
        hideMenu()
      }
    }

    onMounted(() => {
      window.addEventListener('click', handleClickOutside)
      window.addEventListener('keyup', handleKeyup)
    })
    onUnmounted(() => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keyup', handleKeyup)
    })

    watch(visible, () => {
      props.popper && (visible.value ? initPopper() : destroyPopper())
      visible.value ? emit('show') : emit('hide')
    })

    return () =>
      props.variant === 'input-group'
        ? [slots.default && slots.default()]
        : h(
            'div',
            {
              class: [
                props.variant === 'nav-item' ? 'nav-item dropdown' : props.variant,
                props.direction,
              ],
            },
            slots.default && slots.default(),
          )
  },
})

export { CDropdown }
