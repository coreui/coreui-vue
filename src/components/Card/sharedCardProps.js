export default {
  tag: String,
  variant: String,
  borderVariant: String,
  textVariant: String,
  align: {
    type: String,
    validator: val => ['left', 'center', 'right'].includes(val)
  }
}
