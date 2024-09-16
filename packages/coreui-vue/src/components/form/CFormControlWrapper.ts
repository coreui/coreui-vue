import { defineComponent, h } from 'vue'
import { CFormControlValidation } from './CFormControlValidation'
import { CFormFloating } from './CFormFloating'
import { CFormLabel } from './CFormLabel'
import { CFormText } from './CFormText'

import type { ComponentProps } from '../../utils/ComponentProps'

interface CFormControlWrapperProps extends ComponentProps<typeof CFormControlValidation> {
  floatingLabel?: string
  id?: string
  label?: string
  text?: string
}

const CFormControlWrapper = defineComponent({
  name: 'CFormControlWrapper',
  inheritAttrs: false,
  props: {
    ...CFormControlValidation.props,
    /**
     * Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
     *
     * @since 4.3.0
     */
    floatingLabel: String,
    /**
     * @ignore
     */
    id: {
      type: String,
    },
    /**
     * Add a caption for a component.
     *
     * @since 4.3.0
     */
    label: String,
    /**
     * Add helper text to the component.
     *
     * @since 4.3.0
     */
    text: String,
  },
  setup(props: CFormControlWrapperProps, { slots }) {
    const formControlValidation = () =>
      h(
        CFormControlValidation,
        {
          describedby: props.describedby,
          feedback: props.feedback,
          feedbackInvalid: props.feedbackInvalid,
          feedbackValid: props.feedbackValid,
          invalid: props.invalid,
          tooltipFeedback: props.tooltipFeedback,
          valid: props.valid,
        },
        {
          ...(slots.feedback && { feedback: () => slots.feedback && slots.feedback() }),
          ...(slots.feedbackInvalid && {
            feedbackInvalid: () => slots.feedbackInvalid && slots.feedbackInvalid(),
          }),
          ...(slots.feedbackValid && {
            feedbackValid: () => slots.feedbackInvalid && slots.feedbackInvalid(),
          }),
        },
      )

    return () =>
      props.floatingLabel
        ? h(CFormFloating, () => [
            slots.default && slots.default(),
            h(
              CFormLabel,
              {
                for: props.id,
              },
              {
                default: () => (slots.label && slots.label()) || props.label || props.floatingLabel,
              },
            ),
            (props.text || slots.text) &&
              h(
                CFormText,
                {
                  id: props.describedby,
                },
                {
                  default: () => (slots.text && slots.text()) || props.text,
                },
              ),
            formControlValidation(),
          ])
        : [
            (props.label || slots.label) &&
              h(
                CFormLabel,
                {
                  for: props.id,
                },
                {
                  default: () => (slots.label && slots.label()) || props.label,
                },
              ),
            slots.default && slots.default(),
            (props.text || slots.text) &&
              h(
                CFormText,
                {
                  id: props.describedby,
                },
                {
                  default: () => (slots.text && slots.text()) || props.text,
                },
              ),
            formControlValidation(),
          ]
  },
})

export { CFormControlWrapper }
