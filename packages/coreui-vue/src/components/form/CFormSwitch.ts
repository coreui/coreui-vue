import { defineComponent, h } from 'vue'

import { CFormLabel } from './CFormLabel'

const CFormSwitch = defineComponent({
  name: 'CFormSwitch',
  inheritAttrs: false,
  props: {
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document
     */
    id: {
      type: String,
    },
    /**
     * Set component validation state to invalid.
     */
    invalid: {
      type: Boolean,
    },
    /**
     * The element represents a caption for a component.
     */
    label: {
      type: String,
    },
    /**
     * The default name for a value passed using v-model.
     */
    modelValue: {
      type: [Boolean, String],
      value: undefined,
    },
    /**
     * Size the component large or extra large. Works only with `switch`.
     *
     * @values 'lg' | 'xl'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['lg', 'xl'].includes(value)
      },
    },
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
    valid: {
      type: Boolean,
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
  setup(props, { attrs, emit }) {
    const handleChange = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('change', event)
      emit('update:modelValue', target.checked)
    }

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
            ...(props.modelValue && { checked: props.modelValue }),
            class: [
              'form-check-input',
              {
                'is-invalid': props.invalid,
                'is-valid': props.valid,
              },
            ],
            id: props.id,
            onChange: (event: InputEvent) => handleChange(event),
            type: props.type,
          }),
          props.label &&
            h(
              CFormLabel,
              {
                ...(props.id && { for: props.id }),
                class: 'form-check-label',
              },
              {
                default: () => props.label,
              },
            ),
        ],
      )
  },
})

export { CFormSwitch }
