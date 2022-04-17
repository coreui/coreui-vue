import { defineComponent, h } from 'vue'
import { CFormControlWrapper } from './CFormControlWrapper'

const CFormTextarea = defineComponent({
  name: 'CFormTextarea',
  props: {
    ...CFormControlWrapper.props,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * Set component validation state to invalid.
     */
    invalid: {
      type: Boolean,
      required: false,
    },
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: String,
      default: undefined,
      require: false,
    },
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
     */
    plainText: {
      type: Boolean,
      required: false,
    },
    /**
     * Toggle the readonly state for the component.
     */
    readonly: {
      type: Boolean,
      required: false,
    },
    /**
     * Set component validation state to valid.
     */
    valid: {
      type: Boolean,
      required: false,
    },
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
    const handleInput = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('input', event)
      emit('update:modelValue', target.value)
    }

    return () =>
      h(
        CFormControlWrapper,
        {
          describedby: attrs['aria-describedby'],
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
              'textarea',
              {
                ...attrs,
                disabled: props.disabled,
                readonly: props.readonly,
                class: [
                  props.plainText ? 'form-control-plaintext' : 'form-control',
                  {
                    'is-invalid': props.invalid,
                    'is-valid': props.valid,
                  },
                ],
                onInput: (event: InputEvent) => handleInput(event),
                ...(props.modelValue && { value: props.modelValue }),
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

export { CFormTextarea }
