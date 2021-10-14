import { defineComponent, h } from 'vue'

const CFormControlProps = {
  /**
   * A string of all className you want applied to the base component.
   */
  className: {
    type: String,
    required: false,
  },
  /**
   * A string of all className you want applied to the component.
   */
  classNameParent: {
    type: String,
    required: false,
  },
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component: {
    type: String,
    required: false,
    default: 'input',
  },
  /**
   * Toggle the disabled state for the component.
   */
  disabled: {
    type: Boolean,
    required: false,
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
   * Size the component small or large.
   *
   * @values 'sm', 'lg'
   */
  size: {
    validator(value: string): boolean {
      return ['sm', 'lg'].includes(value)
    },
    required: false,
  },
  /**
   * Specifies the type of component.
   */
  type: {
    type: String,
    required: false,
  },
}

const CFormControl = defineComponent({
  name: 'CFormControl',
  props: CFormControlProps,
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.component,
        {
          class: props.classNameParent
            ? props.classNameParent
            : [
                props.readonly ? 'form-control-plaintext' : 'form-control',
                {
                  'form-control-color': props.type === 'color',
                  [`form-control-${props.size}`]: props.size,
                },
                props.className,
              ],
          ...(props.component === 'input' && { type: props.type }),
          ...attrs,
        },
        slots.default && slots.default(),
      )
  },
})

export { CFormControl, CFormControlProps }
