export const Shape = {
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

export const Align = {
  type: String,
  validator: (value: string): boolean => {
    // The value must match one of these strings
    return ['', 'left', 'center', 'right'].includes(value)
  },
}

export const Color = {
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
      'transparent',
    ].includes(value)
  },
}

export const TextColor = {
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
      'high-emphasis',
      'medium-emphasis',
      'disabled',
      'high-emphasis-inverse',
      'medium-emphasis-inverse',
      'disabled-inverse',
    ].includes(value)
  },
}

export const Breakpoint = {
  validator: (value: boolean | number): boolean => {
    if (typeof value == 'boolean' || typeof value == 'number') {
      return true
    } else {
      return false
    }
  },
}