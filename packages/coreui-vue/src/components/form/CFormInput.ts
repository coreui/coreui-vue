import { defineComponent, h } from 'vue'
import { CFormControlWrapper } from './CFormControlWrapper'

export const File = typeof window === 'undefined' ? class File extends Object {} : window.File

const CFormInput = defineComponent({
  name: 'CFormInput',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,

    // Inherited Props from CFormControlWrapper
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
     * Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
     *
     * @since 4.3.0
     */
    floatingLabel: String,
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document.
     */
    id: String,
    /**
     * Set component validation state to invalid.
     */
    invalid: Boolean,
    /**
     * Add a caption for a component.
     *
     * @since 4.3.0
     */
    label: String,
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: [File, Number, String],
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
     */
    plainText: Boolean,
    /**
     * Toggle the readonly state for the component.
     */
    readonly: Boolean,
    /**
     * Size the component small or large.
     *
     * @values 'sm' | 'lg'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Add helper text to the component.
     *
     * @since 4.3.0
     */
    text: String,
    /**
     * Display validation feedback in a styled tooltip.
     *
     * @since 4.3.0
     */
    tooltipFeedback: Boolean,
    /**
     * Specifies the type of component.
     *
     * @values 'color' | 'file' | 'text' | string
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * Set component validation state to valid.
     */
    valid: Boolean,
  },
  emits: [
    /**
     * Event occurs when the element loses focus, after the content has been changed.
     */
    'change',
    /**
     * Event occurs immediately after the value of a component has changed.
     */
    'input',
    /**
     * Emit the new value whenever there’s an input or change event.
     */
    'update:modelValue',
  ],
  setup(props, { attrs, emit, slots }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('change', event)
      emit('update:modelValue', target.value)
    }

    const handleInput = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('input', event)
      emit('update:modelValue', target.value)
    }

    return () =>
      h(
        CFormControlWrapper,
        {
          ...(typeof attrs['aria-describedby'] === 'string' && {
            describedby: attrs['aria-describedby'],
          }),
          feedback: props.feedback,
          feedbackInvalid: props.feedbackInvalid,
          feedbackValid: props.feedbackValid,
          floatingLabel: props.floatingLabel,
          id: props.id,
          invalid: props.invalid,
          label: props.label,
          text: props.text,
          tooltipFeedback: props.tooltipFeedback,
          valid: props.valid,
        },
        {
          default: () =>
            h(
              'input',
              {
                id: props.id,
                ...attrs,
                class: [
                  props.plainText ? 'form-control-plaintext' : 'form-control',
                  {
                    'form-control-color': props.type === 'color',
                    [`form-control-${props.size}`]: props.size,
                    'is-invalid': props.invalid,
                    'is-valid': props.valid,
                  },
                  attrs.class,
                ],
                disabled: props.disabled,
                onChange: (event: InputEvent) => handleChange(event),
                onInput: (event: InputEvent) => handleInput(event),
                readonly: props.readonly,
                type: props.type,
                ...((props.modelValue || props.modelValue === 0) && { value: props.modelValue }),
              },
              slots.default && slots.default(),
            ),
          ...(slots.feedback && { feedback: () => slots.feedback && slots.feedback() }),
          ...(slots.feedbackInvalid && {
            feedbackInvalid: () => slots.feedbackInvalid && slots.feedbackInvalid(),
          }),
          ...(slots.feedbackValid && {
            feedbackValid: () => slots.feedbackInvalid && slots.feedbackInvalid(),
          }),
          ...(slots.label && { label: () => slots.label && slots.label() }),
          ...(slots.text && { text: () => slots.text && slots.text() }),
        },
      )
  },
})

export { CFormInput }
