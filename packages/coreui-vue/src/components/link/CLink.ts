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
    component: {
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
    const handleClick = () => {
      emit('click', props.href)
    }
    return () =>
      h(
        props.component,
        {
          class: [{ active: props.active, disabled: props.disabled }],
          ...(props.active && { 'aria-current': 'page' }),
          ...(props.component === 'a' && props.disabled && { 'aria-disabled': true, tabIndex: -1 }),
          ...((props.component === 'a' || props.component === 'button') && {
            onClick: handleClick,
          }),
          href: props.href,
        },
        slots.default && slots.default(),
      )
  },
})

export { CLink }
