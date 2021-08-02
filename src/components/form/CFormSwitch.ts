import { defineComponent, h } from 'vue'

import { CFormLabel } from './CFormLabel'

const CFormSwitch = defineComponent({
  name: 'CFormSwitch',
  props: {
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document
     */
    id: {
      type: String,
      default: undefined,
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
     * Size the component large or extra large. Works only with `switch`.
     *
     * @values 'lg' | 'xl'
     */
    size: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['lg', 'xl'].includes(value)
      },
    },
    /**
     * Specifies the type of component.
     *
     * @values 'checkbox', 'radio'
     * @default 'checkbox'
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
  setup(props, { attrs }) {
    return () =>
      h(
        'div',
        {
          class: [
            'form-check form-switch',
            {
              [`form-switch-${props.size}`]: props.size,
              'is-invalid': props.invalid,
              'is-valid': props.valid,
            },
          ],
        },
        [
          h('input', {
            ...attrs,
            id: props.id,
            type: props.type,
            class: [
              'form-check-input',
              {
                'is-invalid': props.invalid,
                'is-valid': props.valid,
              },
            ],
          }),
          props.label &&
            h(
              CFormLabel,
              {
                ...(props.id && { for: props.id }),
                class: 'form-check-label',
              },
              props.label,
            ),
        ],
      )
  },
})

export { CFormSwitch }
