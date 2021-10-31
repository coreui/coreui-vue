import { defineComponent, h } from 'vue'

const CFormRange = defineComponent({
  name: 'CFormRange',
  props: {
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      default: undefined,
      required: false,
    },
    /**
     * Specifies the maximum value for the component.
     */
    max: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * Specifies the minimum value for the component.
     */
    min: {
      type: Number,
      default: undefined,
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
     * Specifies the interval between legal numbers in the component.
     */
    steps: {
      type: Number,
      default: undefined,
      required: false,
    },
    /**
     * The `value` attribute of component.
     *
     * @controllable onChange
     * */
    value: {
      type: Number,
      default: undefined,
      required: false,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'input',
        {
          class: 'form-range',
          type: 'range',
          ...attrs,
          ...props,
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormRange }
