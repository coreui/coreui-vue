export default {
  tag: String,
  color: String,
  borderColor: String,
  textColor: String,
  align: {
    type: String,
    validator: val => ['', 'left', 'center', 'right'].includes(val)
  }
}
