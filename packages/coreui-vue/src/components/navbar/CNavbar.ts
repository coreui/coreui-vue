import { defineComponent, h } from 'vue'

import { Color } from '../../props'

const CNavbar = defineComponent({
  name: 'CNavbar',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'nav',
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
    /**
     * Sets if the color of text should be colored for a light or dark dark background.
     *
     * @values 'dark', 'light'
     */
    colorScheme: {
      type: String,
      validator: (value: string) => {
        return ['dark', 'light'].includes(value)
      },
    },
    /**
     * Defines optional container wrapping children elements.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'
     */
    container: {
      type: [Boolean, String],
      validator: (value: boolean | string) => {
        return (
          typeof value === 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(value)
        )
      },
    },
    /**
     * Defines the responsive breakpoint to determine when content collapses.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    expand: {
      type: [Boolean, String],
      validator: (value: boolean | string) => {
        return typeof value === 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
      },
    },
    /**
     * Place component in non-static positions.
     *
     * @values 'fixed-top', 'fixed-bottom', 'sticky-top'
     */
    placement: {
      type: String,
      validator: (value: string) => {
        return ['fixed-top', 'fixed-bottom', 'sticky-top'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: [
            'navbar',
            {
              [`bg-${props.color}`]: props.color,
              [typeof props.expand === 'boolean'
                ? 'navbar-expand'
                : `navbar-expand-${props.expand}`]: props.expand,
            },
            props.placement,
          ],
          ...(props.colorScheme && { 'data-coreui-theme': props.colorScheme }),
        },
        props.container
          ? h(
              'div',
              { class: [`container${props.container === true ? '' : '-' + props.container}`] },
              slots.default && slots.default(),
            )
          : slots.default && slots.default(),
      )
  },
})

export { CNavbar }
