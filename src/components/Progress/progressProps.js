export default {
  height: String,
  // These props can be inherited via the child CProgressBar(s)
  variant: {
    type: String,
    default: 'primary'
  },
  striped: Boolean,
  animated: Boolean,
  precision: {
    type: Number,
    default: 0
  },
  showProgress: Boolean,
  showValue: Boolean,
  max: {
    type: Number,
    default: 100
  },
  value: Number
}
