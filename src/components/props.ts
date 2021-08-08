const Shape = {
  type: String,
  validator: (value: string): boolean => {
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
const Align = {
  type: String,
  validator: (value: string): boolean => {
    // The value must match one of these strings
    return ['', 'left', 'center', 'right'].includes(value)
  },
}
const Color = {
  type: String,
  validator: (value: string): boolean => {
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
const TextColor = {
  type: String,
  validator: (value: string): boolean => {
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
const Breakpoint = {
  validator: (value: boolean | number): boolean => {
    if (typeof value == 'boolean' || typeof value == 'number') {
      return true
    } else {
      return false
    }
  },
}

export { Align, Breakpoint, Color, Shape, TextColor }
