import { defineComponent, h } from 'vue'

export const CAlertHeading = defineComponent({
  name: 'CAlertHeading',
  props: {
    /**
     * 	Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: 'h4',
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.component,
        {
          class: 'alert-heading',
        },
        slots,
      )
  },
})
