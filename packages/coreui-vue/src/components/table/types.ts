export type Column = {
  label?: string
  key: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _style?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props?: any
}

export type FooterItem = {
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props?: any
}

export type Item = {
  [key: string]: number | string | any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props?: any
}
