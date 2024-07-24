import { defineComponent, h } from 'vue'

import { Color, Shape } from '../../props'

export const CButton = defineComponent({
  name: 'CButton',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'button',
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: String,
    /**
     * Select the shape of the component.
     *
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
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Specifies the type of button. Always specify the type attribute for the `<button>` element.
     * Different browsers may use different default types for the `<button>` element.
     *
     * @values 'button', 'submit', 'reset'
     */
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return ['button', 'submit', 'reset'].includes(value)
      },
    },
    /**
     * Set the button variant to an outlined button or a ghost button.
     *
     * @values 'ghost', 'outline'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return ['ghost', 'outline'].includes(value)
      },
    },
  },
  emits: [
    /**
     * Event called when the user clicks on the button.
     */
    'click',
  ],
  setup(props, { emit, slots }) {
    const component = props.href ? 'a' : props.as
    const handleClick = (event: Event) => {
      if (props.disabled) {
        return
      }

      emit('click', event)
    }
    return () =>
      h(
        component,
        {
          class: [
            'btn',
            {
              [`btn-${props.color}`]: props.color && !props.variant,
              [`btn-${props.variant}-${props.color}`]: props.color && props.variant,
              [`btn-${props.size}`]: props.size,
              active: props.active,
              disabled: props.disabled,
            },
            props.shape,
          ],
          ...(component === 'a' && props.disabled && { 'aria-disabled': true, tabIndex: -1 }),
          ...(component === 'a' && props.href && { href: props.href }),
          ...(component === 'button' && { type: props.type, disabled: props.disabled }),
          onClick: handleClick,
        },
        slots.default && slots.default(),
      )
  },
})
