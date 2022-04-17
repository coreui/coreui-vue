import { defineComponent, h } from 'vue'
import { shape } from 'vue-types'

import { CFormControlValidation } from './CFormControlValidation'
import { CFormLabel } from './CFormLabel'

import { Color, Shape } from '../props'

const CFormCheck = defineComponent({
  name: 'CFormCheck',
  inheritAttrs: false,
  props: {
    ...CFormControlValidation.props,
    /**
     * Create button-like checkboxes and radio buttons.
     */
    button: shape({
      /**
       * Sets the color context of the component to one of CoreUI’s themed colors.
       *
       * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
       */
      color: Color,
      /**
       * Select the shape of the component.
       *
       * @values 'rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start', 'rounded-circle', 'rounded-pill', 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3'
       */
      shape: Shape,
      /**
       * Size the component small or large.
       *
       * @values 'sm' | 'lg'
       */
      size: {
        type: String,
        default: undefined,
        required: false,
        validator: (value: string) => {
          return ['sm', 'lg'].includes(value)
        },
      },
      /**
       * Set the button variant to an outlined button or a ghost button.
       */
      variant: {
        type: String,
        default: undefined,
        required: false,
        validator: (value: string) => {
          return ['outline', 'ghost'].includes(value)
        },
      },
    }),
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document.
     */
    id: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Input Checkbox indeterminate Property
     */
    indeterminate: Boolean,
    /**
     * Group checkboxes or radios on the same horizontal row by adding.
     */
    inline: {
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
     * Sets hit area to the full area of the component.
     */
    hitArea: {
      type: String,
      required: false,
      validator: (value: string): boolean => {
        // The value must match one of these strings
        return ['full'].includes(value)
      },
    },
    /**
     * The element represents a caption for a component.
     */
    label: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: [Boolean, String],
      value: undefined,
      required: false,
    },
    /**
     * Specifies the type of component.
     *
     * @values 'checkbox', 'radio'
     */
    type: {
      type: String,
      default: 'checkbox',
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
      emit('update:modelValue', target.checked)
    }

    const className = [
      'form-check',
      {
        'form-check-inline': props.inline,
        'is-invalid': props.invalid,
        'is-valid': props.valid,
      },
      attrs.class,
    ]

    const inputClassName = props.button
      ? 'btn-check'
      : [
          'form-check-input',
          {
            'is-invalid': props.invalid,
            'is-valid': props.valid,
            'me-2': props.hitArea,
          },
        ]

    const labelClassName = props.button
      ? [
          'btn',
          props.button.variant
            ? `btn-${props.button.variant}-${props.button.color}`
            : `btn-${props.button.color}`,
          {
            [`btn-${props.button.size}`]: props.button.size,
          },
          `${props.button.shape}`,
        ]
      : 'form-check-label'

    const formControl = () => {
      return h('input', {
        ...attrs,
        ...(props.modelValue && { checked: props.modelValue }),
        class: inputClassName,
        id: props.id,
        indeterminate: props.indeterminate,
        onChange: (event: InputEvent) => handleChange(event),
        type: props.type,
      })
    }

    const formLabel = () => {
      return h(
        CFormLabel,
        {
          customClassName: labelClassName,
          ...(props.id && { for: props.id }),
        },
        {
          default: () => (slots.label && slots.label()) || props.label,
        },
      )
    }

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
