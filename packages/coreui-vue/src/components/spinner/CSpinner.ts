import { defineComponent, h } from 'vue'

const CSpinner = defineComponent({
  name: 'CSpinner',
  props: {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: {
      type: String,
      default: undefined,
      required: false,
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
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: 'div',
      required: false,
    },
    /**
     * Size the component small.
     *
     * @values 'sm'
     */
    size: {
      type: String,
      default: undefined,
      required: false,
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
      required: false,
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
      required: false,
    },
  },
  setup(props) {
    return () =>
      h(
        props.component,
        {
          class: [
            `spinner-${props.variant}`,
            `text-${props.color}`,
            props.size && `spinner-${props.variant}-${props.size}`,
          ],
          role: 'status',
        },
        h('span', { class: ['visually-hidden'] }, props.visuallyHiddenLabel),
      )
  },
})

export { CSpinner }
