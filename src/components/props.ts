const Any: Object = {
  validator: function (value: any) {
    value
    return true
  },
}
const Value: Object = {
  validator: function (value: any) {
    if (typeof value === 'string' || typeof value === 'object' || typeof value === 'number') {
      return true
    } else {
      return false
    }
  },
}
const Shape: Object = {
  type: String,
  validator: function (value: string) {
    // The value must match one of these strings
    return [
      'rounded',
      'rounded-top',
      'rounded-end',
      'rounded-bottom',
      'rounded-start',
      'rounded-circle',
      'rounded-pill',
      'rounded-0',
      'rounded-1',
      'rounded-2',
      'rounded-3',
    ].includes(value)
  },
}
const Align: Object = {
  type: String,
  validator: function (value: string) {
    // The value must match one of these strings
    return ['', 'left', 'center', 'right'].includes(value)
  },
}
const Color = {
  type: String,
  validator(value: string): boolean {
    // The value must match one of these strings
    return [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'dark',
      'light',
      'link',
    ].includes(value)
  },
}
const TextColor: Object = {
  type: String,
  validator: function (value: string) {
    return [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'dark',
      'light',
      'white',
      'muted',
    ].includes(value)
  },
}
const Breakpoint: Object = {
  validator: function (value: any) {
    if (typeof value == 'boolean' || typeof value == 'number') {
      return true
    } else {
      return false
    }
  },
}

export { Any, Value, Shape, Align, Color, TextColor, Breakpoint }
