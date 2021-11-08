import { defineComponent, h } from 'vue'
import { shape } from 'vue-types'

import { Color, Shape } from '../props'
import { CFormLabel } from './CFormLabel'

const CFormCheck = defineComponent({
  name: 'CFormCheck',
  inheritAttrs: false,
  props: {
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

    const formControl = () => {
      return h('input', {
        checked: props.modelValue,
        class: [
          props.button ? 'btn-check' : 'form-check-input',
          {
            'is-invalid': props.invalid,
            'is-valid': props.valid,
          },
        ],
        id: props.id,
        indeterminate: props.indeterminate,
        onChange: (event: InputEvent) => handleChange(event),
        type: props.type,
        ...attrs,
      })
    }
    const formLabel = () => {
      return h(
        CFormLabel,
        {
          customClassName: props.button
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
            : 'form-check-label',
          ...(props.id && { for: props.id }),
        },
        {
          default: () => (slots.label && slots.label()) || props.label,
        },
      )
    }

    return () =>
      props.button
        ? [formControl(), (slots.label || props.label) && formLabel()]
        : props.label
        ? h(
            'div',
            {
              class: [
                'form-check',
                {
                  'form-check-inline': props.inline,
                  'is-invalid': props.invalid,
                  'is-valid': props.valid,
                },
              ],
            },
            [formControl(), props.label && formLabel()],
          )
        : formControl()
  },
})

export { CFormCheck }
