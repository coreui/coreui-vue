import { defineComponent, h } from 'vue'

const CFormFeedback = defineComponent({
  name: 'CFormFeedback',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'div',
    },
    /**
     * Method called immediately after the `value` prop changes.
     */
    invalid: Boolean,
    /**
     * If your form layout allows it, you can display validation feedback in a styled tooltip.
     */
    tooltip: Boolean,
    /**
     * Set component validation state to valid.
     */
    valid: Boolean,
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: [
            {
              [`invalid-${props.tooltip ? 'tooltip' : 'feedback'}`]: props.invalid,
              [`valid-${props.tooltip ? 'tooltip' : 'feedback'}`]: props.valid,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormFeedback }
