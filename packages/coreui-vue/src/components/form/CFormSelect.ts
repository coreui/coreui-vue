import { defineComponent, h, PropType } from 'vue'
import { CFormControlWrapper } from './CFormControlWrapper'

type Option = {
  disabled?: boolean
  label?: string
  selected?: boolean
  value?: string
}

const CFormSelect = defineComponent({
  name: 'CFormSelect',
  props: {
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
     * Specifies the number of visible options in a drop-down list.
     */
    htmlSize: Number,
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
    modelValue: {
      type: [String, Array] as PropType<string | string[]>,
    },
    multiple: Boolean,
    /**
     * Options list of the select component. Available keys: `label`, `value`, `disabled`.
     * Examples:
     * - `:options="[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]"`
     * - `:options="['js', 'html']"`
     */
    options: Array as PropType<Option[] | string[]>,
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
     * Set component validation state to valid.
     */
    valid: Boolean,
  },
  emits: [
    /**
     * Event occurs when when a user changes the selected option of a `<select>` element.
     */
    'change',
    /**
     * Emit the new value whenever there’s a change event.
     */
    'update:modelValue',
  ],
  setup(props, { attrs, emit, slots }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLSelectElement
      const selected = Array.from(target.options)
        .filter((option) => option.selected)
        .map((option) => option.value)
      emit('change', event)
      emit('update:modelValue', target.multiple ? selected : selected[0])
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
              'select',
              {
                id: props.id,
                ...attrs,
                class: [
                  'form-select',
                  {
                    [`form-select-${props.size}`]: props.size,
                    'is-invalid': props.invalid,
                    'is-valid': props.valid,
                  },
                  attrs.class,
                ],
                multiple: props.multiple,
                onChange: (event: InputEvent) => handleChange(event),
                size: props.htmlSize,
                ...(props.modelValue && !props.multiple && { value: props.modelValue }),
              },
              props.options
                ? props.options.map((option: Option | string) => {
                    return h(
                      'option',
                      {
                        ...(typeof option === 'object' && {
                          ...(option.disabled && { disabled: option.disabled }),
                          ...(option.selected && { selected: option.selected }),
                          ...(option.value !== undefined && {
                            value: option.value,
                            ...(props.modelValue &&
                              props.multiple &&
                              props.modelValue.includes(option.value) && { selected: true }),
                          }),
                        }),
                      },
                      typeof option === 'string' ? option : option.label,
                    )
                  })
                : slots.default && slots.default(),
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

export { CFormSelect }
