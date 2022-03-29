import { cloneVNode, defineComponent, h, inject, onMounted, PropType, Ref, ref } from 'vue'
import { CButton } from '../button'
import { Color, Shape } from '../props'
import { Triggers } from '../Types'

const CDropdownToggle = defineComponent({
  name: 'CDropdownToggle',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Enables pseudo element caret on toggler.
     */
    caret: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: 'button',
      require: false,
    },
    /**
     * Create a custom toggler which accepts any content.
     */
    custom: Boolean,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * @values 'rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start', 'rounded-circle', 'rounded-pill', 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3'
     */
    shape: Shape,
    /**
     * Size the component small or large.
     *
     * @values 'sm', 'lg'
     */
    size: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
     */
    split: {
      type: Boolean,
      required: false,
    },
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     *
     * @type 'hover' | 'focus' | 'click'
     */
    trigger: {
      type: String as PropType<Triggers>,
      default: 'click',
      required: false,
    },
    /**
     * Set the button variant to an outlined button or a ghost button.
     *
     * @values 'ghost', 'outline'
     */
    variant: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['ghost', 'outline'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    const togglerRef = ref()
    const dropdownToggleRef = inject('dropdownToggleRef') as Ref<HTMLElement>
    const dropdownVariant = inject('variant') as string
    const visible = inject('visible') as Ref<boolean>
    const toggleMenu = inject('toggleMenu') as (_visible?: boolean) => void

    const className = [
      {
        'dropdown-toggle': props.caret,
        'dropdown-toggle-split': props.split,
        active: props.active,
        disabled: props.disabled,
      },
    ]

    const triggers = {
      ...((props.trigger === 'click' || props.trigger.includes('click')) && {
        onClick: () => {
          if (props.disabled) {
            return
          }

          toggleMenu()
        },
      }),
      ...((props.trigger === 'focus' || props.trigger.includes('focus')) && {
        onfocus: () => {
          if (props.disabled) {
            return
          }

          toggleMenu(true)
        },
        onblur: () => {
          if (props.disabled) {
            return
          }
          toggleMenu(false)
        },
      }),
    }

    onMounted(() => {
      if (togglerRef.value) {
        dropdownToggleRef.value = togglerRef.value.$el
      }
    })

    return () =>
      props.custom
        ? slots.default &&
          slots.default().map((slot) =>
            cloneVNode(slot, {
              ref: (el) => {
                togglerRef.value = el
              },
              ...triggers,
            }),
          )
        : dropdownVariant === 'nav-item'
        ? h(
            'a',
            {
              active: props.active,
              class: [
                'nav-link',
                className,
                {
                  show: visible.value,
                },
              ],
              disabled: props.disabled,
              href: '#',
              ref: dropdownToggleRef,
              ...triggers,
            },
            { default: () => slots.default && slots.default() },
          )
        : h(
            CButton,
            {
              class: [
                className,
                {
                  show: visible.value,
                },
              ],
              active: props.active,
              color: props.color,
              disabled: props.disabled,
              ref: (el) => {
                togglerRef.value = el
              },
              shape: props.shape,
              size: props.size,
              ...triggers,
              ...(props.component === 'button' && { type: 'button' }),
              variant: props.variant,
            },
            () =>
              props.split
                ? h('span', { class: 'visually-hidden' }, 'Toggle Dropdown')
                : slots.default && slots.default(),
          )
  },
})

export { CDropdownToggle }
