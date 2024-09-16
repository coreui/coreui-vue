import { DefineComponent, ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export type ComponentProps<T> =
  T extends DefineComponent<ExtractPropTypes<infer Props>, any, any>
    ? ExtractPublicPropTypes<Props>
    : never
