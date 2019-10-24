export default {
  height: String,
  // These props can be inherited via the child CProgressBar(s)
  color: String,
  striped: Boolean,
  animated: Boolean,
  precision: {
    type: Number,
    default: 0
  },
  showPercentage: Boolean,
  showValue: Boolean,
  max: {
    type: Number,
    default: 100
  },
  value: {
    type: Number,
    default: 0
  }
}
