export const props = {
  autohide: {
    type: [Number, Boolean],
    validator: val => typeof val === 'number' || val === false
  },
  closeButton: {
    type: Boolean,
    default: true
  },
  fade: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: ''
  }
}
