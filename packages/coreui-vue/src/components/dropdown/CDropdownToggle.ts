import { cloneVNode, defineComponent, h, inject, onMounted, Ref, ref } from 'vue'
import { CButton } from '../button'
import { Color, Shape } from '../props'

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
    const buttonRef = ref()
    const dropdownToggleRef = inject('dropdownToggleRef') as Ref<HTMLElement>
    const dropdownVariant = inject('variant') as string
    const visible = inject('visible') as Ref<boolean>
    const toggleMenu = inject('toggleMenu') as () => void
    const className = [
      {
        'dropdown-toggle': props.caret,
        'dropdown-toggle-split': props.split,
        show: visible.value,
        active: props.active,
        disabled: props.disabled,
      },
    ]

    onMounted(() => {
      if (buttonRef.value) {
        dropdownToggleRef.value = buttonRef.value.$el
      }
    })

    return () =>
      props.custom
        ? slots.default &&
          slots.default().map((slot) =>
            cloneVNode(slot, {
              onClick: () => toggleMenu(),
              ref: dropdownToggleRef,
            }),
          )
        : dropdownVariant === 'nav-item'
        ? h(
            'a',
            {
              active: props.active,
              class: ['nav-link', className],
              disabled: props.disabled,
              href: '#',
              onClick: (event: Event) => {
                event.preventDefault()
                toggleMenu()
              },
              ref: dropdownToggleRef,
            },
            { default: () => slots.default && slots.default() },
          )
        : h(
            CButton,
            {
              class: className,
              active: props.active,
              color: props.color,
              disabled: props.disabled,
              onClick: () => toggleMenu(),
              ...(props.component === 'button' && { type: 'button' }),
              ref: (el) => {
                buttonRef.value = el
              },
              shape: props.shape,
              size: props.size,
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
