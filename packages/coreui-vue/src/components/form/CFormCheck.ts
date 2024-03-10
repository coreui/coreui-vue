import { computed, defineComponent, h } from 'vue'

import { CButton } from '../button'
import { CFormControlValidation } from './CFormControlValidation'
import { CFormLabel } from './CFormLabel'

const CFormCheck = defineComponent({
  name: 'CFormCheck',
  inheritAttrs: false,
  props: {
    /**
     * Create button-like checkboxes and radio buttons.
     *
     * @see http://coreui.io/vue/docs/components/button.html
     */
    button: Object,
    /**
     * Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `false` state.
     *
     * @since 4.10.0
     */
    falseValue: String,
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
     * Sets hit area to the full area of the component.
     */
    hitArea: {
      type: String,
      validator: (value: string): boolean => {
        // The value must match one of these strings
        return ['full'].includes(value)
      },
    },
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document.
     */
    id: String,
    /**
     * Input Checkbox indeterminate Property
     */
    indeterminate: Boolean,
    /**
     * Group checkboxes or radios on the same horizontal row by adding.
     */
    inline: Boolean,
    /**
     * Set component validation state to invalid.
     */
    invalid: Boolean,
    /**
     * The element represents a caption for a component.
     */
    label: String,
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: [Array, Boolean, String],
      value: undefined,
    },
    /**
     * Put checkboxes or radios on the opposite side.
     *
     * @since 4.8.0
     */
    reverse: Boolean,
    /**
     * Display validation feedback in a styled tooltip.
     *
     * @since 4.3.0
     */
    tooltipFeedback: Boolean,
    /**
     * Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `true` state.
     *
     * @since 4.10.0
     */
    trueValue: String,
    /**
     * Specifies the type of component.
     *
     * @values 'checkbox', 'radio'
     */
    type: {
      type: String,
      default: 'checkbox',
    },
    /**
     * Set component validation state to valid.
     */
    valid: Boolean,
    /**
     * The value attribute of component.
     */
    value: String,
  },
  emits: [
    /**
     * Event occurs when the checked value has been changed.
     */
    'change',
    /**
     * Emit the new value whenever there’s a change event.
     */
    'update:modelValue',
  ],
  setup(props, { attrs, emit, slots }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('change', event)

      if (props.falseValue && props.trueValue) {
        emit('update:modelValue', target.checked ? props.trueValue : props.falseValue)
        return
      }

      if (props.value && Array.isArray(props.modelValue)) {
        if (props.modelValue.includes(props.value)) {
          emit(
            'update:modelValue',
            props.modelValue.filter((value) => value !== props.value),
          )
        } else {
          emit('update:modelValue', [...props.modelValue, props.value])
        }

        return
      }

      if (props.value === undefined) {
        emit('update:modelValue', target.checked)
        return
      }

      if (props.value && (props.modelValue === undefined || typeof props.modelValue === 'string')) {
        emit('update:modelValue', target.checked ? props.value : undefined)
      }
    }

    const className = [
      'form-check',
      {
        'form-check-inline': props.inline,
        'form-check-reverse': props.reverse,
        'is-invalid': props.invalid,
        'is-valid': props.valid,
      },
      attrs.class,
    ]

    const inputClassName = [
      props.button ? 'btn-check' : 'form-check-input',
      {
        'is-invalid': props.invalid,
        'is-valid': props.valid,
        'me-2': props.hitArea,
      },
    ]

    const isChecked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return props.modelValue.includes(props.value)
      }

      if (typeof props.modelValue === 'string') {
        return props.modelValue === props.value
      }

      return props.modelValue
    })

    const formControl = () => {
      return h('input', {
        ...attrs,
        ...(props.modelValue && { checked: isChecked.value }),
        class: inputClassName,
        id: props.id,
        indeterminate: props.indeterminate,
        onChange: (event: InputEvent) => handleChange(event),
        type: props.type,
        value: props.value,
      })
    }

    const formLabel = () =>
      props.button
        ? h(
            CButton,
            {
              as: 'label',
              ...props.button,
              ...(props.id && { for: props.id }),
            },
            {
              default: () => (slots.label && slots.label()) || props.label,
            },
          )
        : h(
            CFormLabel,
            { class: 'form-check-label', ...(props.id && { for: props.id }) },
            {
              default: () => (slots.label && slots.label()) || props.label,
            },
          )

    const formValidation = () => {
      return h(CFormControlValidation, {
        describedby: attrs['aria-describedby'] as string,
        feedback: props.feedback,
        feedbackInvalid: props.feedbackInvalid,
        feedbackValid: props.feedbackValid,
        invalid: props.invalid,
        tooltipFeedback: props.tooltipFeedback,
        valid: props.valid,
      })
    }

    return () =>
      props.button
        ? [formControl(), (slots.label || props.label) && formLabel(), formValidation()]
        : props.label
          ? props.hitArea
            ? [
                h(
                  CFormLabel,
                  {
                    customClassName: className,
                    ...(props.id && { for: props.id }),
                  },
                  [formControl(), props.label],
                ),
                formValidation(),
              ]
            : h(
                'div',
                {
                  class: className,
                },
                [formControl(), props.label && formLabel(), formValidation()],
              )
          : formControl()
  },
})

export { CFormCheck }
