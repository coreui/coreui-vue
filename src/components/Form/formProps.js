const formGroupAlwaysSharedProps = {
  validFeedback: String,
  invalidFeedback: String,
  tooltipFeedback: Boolean,
  description: String
}
const formGroupSharedProps = Object.assign(
  {}, formGroupAlwaysSharedProps,{
  appendHtml: String,
  prependHtml: String
})

export const formGroupProps = Object.assign(
  {}, formGroupSharedProps, { wrapperClasses: [String, Array, Object] }
)

const universalProps = {
  label: String,
  wasValidated: Boolean,
  isValid: {
    type: [Boolean, Function],
    default: null
  },
  addInputClasses: [String, Array, Object],
  addLabelClasses: [String, Array, Object]
}
const props = Object.assign({}, universalProps, {
  horizontal: [Boolean, Object],
  size: {
    type: String,
    validator: str => ['','sm','lg'].includes(str)
  },
  addWrapperClasses: [String, Array, Object]
})
const textInputsProps = {
  readonly: Boolean,
  plaintext: Boolean,
  value: String,
  lazy: {
    type: [Boolean, Number],
    default: 400
  }
}

// Html props: disabled, required, accept, id, placeholder
export const formFileProps = Object.assign(
  {}, formGroupAlwaysSharedProps, props, {
  custom: Boolean,
  placeholder: String,
  multiple: Boolean
})

// Html props: disabled, required, rows, cols, placeholder, id
export const formTextareaProps = Object.assign(
  {}, formGroupSharedProps, props, textInputsProps
)

// HTML props: disabled, required, placeholder, id
export const formInputProps = Object.assign(
  {}, formGroupSharedProps, props, textInputsProps, {
  type: {
    type: String,
    default: 'text'
  }
})

// Html props: disabled, id required don't use multiple
export const formSelectProps = Object.assign(
  {}, formGroupSharedProps, props, {
  options: Array,
  value: [String, Number, Boolean, Array],
  plaintext: Boolean,
  placeholder: String,
  custom: Boolean
})

// Html props: id, disabled, required
export const formRadioProps = Object.assign(
  {}, formGroupAlwaysSharedProps, universalProps, {
  checked: [Boolean, String, Number],
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
  custom: Boolean,
  inline: Boolean
})

// Html props: id, disabled, required
export const formCheckboxProps = Object.assign(
  {}, formRadioProps, {
  trueValue: {
    type: [String, Number],
    default: undefined
  },
  falseValue: {
    type: [String, Number],
    default: undefined
  }
})
