import { defineComponent, h } from 'vue'
import { shape } from 'vue-types'

import { Color, Shape } from '../props'
import { CFormLabel } from './CFormLabel'

const CFormCheck = defineComponent({
  name: 'CFormCheck',
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
  setup(props, { slots, attrs }) {
    const formControl = () => {
      return h('input', {
        ...attrs,
        class: [
          props.button ? 'btn-check' : 'form-check-input',
          {
            'is-invalid': props.invalid,
            'is-valid': props.valid,
          },
        ],
        id: props.id,
        type: props.type,
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
