import { defineComponent, h } from 'vue'

const CSpinner = defineComponent({
  name: 'CSpinner',
  props: {
        /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
        as: {
          type: String,
          default: 'div',
        },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: {
      type: String,
      validator: (value: string) => {
        return [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'dark',
          'light',
        ].includes(value)
      },
    },
    /**
     * Size the component small.
     *
     * @values 'sm'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return value === 'sm'
      },
    },
    /**
     * Set the button variant to an outlined button or a ghost button.
     *
     * @values 'border', 'grow'
     */
    variant: {
      type: String,
      default: 'border',
      validator: (value: string) => {
        return ['border', 'grow'].includes(value)
      },
    },
    /**
     * Set visually hidden label for accessibility purposes.
     */
    visuallyHiddenLabel: {
      type: String,
      default: 'Loading...',
    },
  },
  setup(props) {
    return () =>
      h(
        props.as,
        {
          class: [
            `spinner-${props.variant}`,
            {
              [`spinner-${props.variant}-${props.size}`]: props.size,
              [`text-${props.color}`]: props.color,
            },
          ],
          role: 'status',
        },
        h('span', { class: ['visually-hidden'] }, props.visuallyHiddenLabel),
      )
  },
})

export { CSpinner }
