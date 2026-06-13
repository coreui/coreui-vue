import { DefineComponent, ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export type ComponentProps<T> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends DefineComponent<ExtractPropTypes<infer Props>, any, any>
    ? ExtractPublicPropTypes<Props>
    : never
