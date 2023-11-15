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
      'primary-emphasis',
      'secondary-emphasis',
      'success-emphasis',
      'danger-emphasis',
      'warning-emphasis',
      'info-emphasis',
      'light-emphasis',
      'body',
      'body-emphasis',
      'body-secondary',
      'body-tertiary',
      'black',
      'black-50',
      'white',
      'white-50',
    ].includes(value)
  },
}

export const Breakpoint = {
  validator: (value: boolean | number): boolean => {
    return typeof value == 'boolean' || typeof value == 'number' ? true : false
  },
}
