import { defineComponent, h } from 'vue'

export const CAlertHeading = defineComponent({
  name: 'CAlertHeading',
  props: {
    /**
     * 	Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'h4',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: 'alert-heading',
        },
        slots,
      )
  },
})
