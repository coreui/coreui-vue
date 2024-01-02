import { defineComponent, h } from 'vue'

const CLink = defineComponent({
  name: 'CLink',
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
      default: 'a',
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: String,
  },
  emits: [
    /**
     * Event called when the user clicks on the component.
     */
    'click',
  ],
  setup(props, { slots, emit }) {
    const handleClick = (event: Event) => {
      emit('click', props.href)

      if (props.href === '' || props.href === '#') {
        event.preventDefault()
      }
    }
    return () =>
      h(
        props.as,
        {
          class: [{ active: props.active, disabled: props.disabled }],
          ...(props.active && { 'aria-current': 'page' }),
          ...(props.as === 'a' && props.disabled && { 'aria-disabled': true, tabIndex: -1 }),
          ...((props.as === 'a' || props.as === 'button') && {
            onClick: handleClick,
          }),
          href: props.href,
        },
        slots.default && slots.default(),
      )
  },
})

export { CLink }
