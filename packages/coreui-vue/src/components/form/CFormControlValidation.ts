import { defineComponent, h } from 'vue'
import { CFormFeedback } from './CFormFeedback'

const CFormControlValidation = defineComponent({
  name: 'CFormControlValidation',
  inheritAttrs: false,
  props: {
    /**
     * @ignore
     */
    describedby: String,
    /**
     * Provide valuable, actionable feedback.
     *
     * @since 4.3.0
     */
    feedback: String,
    /**
     * Provide valuable, actionable feedback.
     *
     * @since 4.3.0
     */
    feedbackInvalid: String,
    /**
     * Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
     *
     * @since 4.3.0
     */
    feedbackValid: String,
    /**
     * Set component validation state to invalid.
     */
    invalid: Boolean,
    /**
     * Display validation feedback in a styled tooltip.
     *
     * @since 4.3.0
     */
    tooltipFeedback: Boolean,
    /**
     * Set component validation state to valid.
     */
    valid: Boolean,
  },
  setup(props, { slots }) {
    return () => [
      props.feedback &&
        (props.valid || props.invalid) &&
        h(
          CFormFeedback,
          {
            ...(props.invalid && { id: props.describedby }),
            invalid: props.invalid,
            tooltip: props.tooltipFeedback,
            valid: props.valid,
          },
          {
            default: () => (slots.feedback && slots.feedback()) || props.feedback,
          },
        ),
      (props.feedbackInvalid || slots.feedbackInvalid) &&
        h(
          CFormFeedback,
          {
            id: props.describedby,
            invalid: true,
            tooltip: props.tooltipFeedback,
          },
          {
            default: () =>
              (slots.feedbackInvalid && slots.feedbackInvalid()) || props.feedbackInvalid,
          },
        ),
      (props.feedbackValid || slots.feedbackValid) &&
        h(
          CFormFeedback,
          {
            tooltip: props.tooltipFeedback,
            valid: true,
          },
          {
            default: () => (slots.feedbackValid && slots.feedbackValid()) || props.feedbackValid,
          },
        ),
    ]
  },
})

export { CFormControlValidation }
