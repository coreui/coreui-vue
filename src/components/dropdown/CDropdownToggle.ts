import { defineComponent, h, inject } from 'vue'

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
     *
     * @default true
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
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * Select the shape of the component.
     */
    shape: Shape,
    /**
     * Size the component small or large.
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
     */
    variant: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['ghost', 'outline'].includes(value)
      },
    },
    togglerVariant: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  setup(props, { slots }) {
    const dropdownRef = inject('dropdownRef') as any
    const dropdownVariant = inject('variant') as string
    const visible = inject('visible') as any
    const toggleMenu = inject('toggleMenu') as any
    const className = [
      {
        'dropdown-toggle': props.caret,
        'dropdown-toggle-split': props.split,
        show: visible,
        active: props.active,
        disabled: props.disabled,
      },
    ]

    const buttonClassName = [
      'btn',
      props.variant ? `btn-${props.variant}-${props.color}` : `btn-${props.color}`,
      {
        [`btn-${props.size}`]: props.size,
      },
      props.shape,
    ]

    return () =>
      dropdownVariant === 'nav-item'
        ? h(
            'a',
            {
              active: props.active,
              class: ['nav-link', className],
              disabled: props.disabled,
              href: '#',
              ref: dropdownRef,
            },
            { default: () => slots.default && slots.default() },
          )
        : h(
            // TODO: check how to use CButton component
            props.component,
            {
              class: [...className, ...buttonClassName],
              active: props.active,
              disabled: props.disabled,
              onClick: () => toggleMenu(),
              ref: dropdownRef,
            },
            {
              default: () =>
                props.split
                  ? h('span', { class: 'visually-hidden' }, 'Toggle Dropdown')
                  : slots.default && slots.default(),
            },
          )
  },
})

export { CDropdownToggle }
