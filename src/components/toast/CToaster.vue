<template>
  <div :class="toasterClasses">
    <slot></slot>
  </div>
</template>

<script>
import { props } from './toast-props'

export default {
  name: 'CToaster',
  provide () {
    const toaster = {}
    Object.defineProperty(toaster, 'props', {
      get: () => this._props
    })
    return { toaster }
  },
  props: {
    ...props,
    position: {
      type: String,
      default: 'top-right',
      validator: position => {
        return [
          '', 'static', 'top-right', 'top-left', 'top-center', 'top-full',
          'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
        ].includes(position)
      }
    }
  },
  computed: {
    toasterClasses () {
      const hasFixedPosition = this.position && this.position !== 'static'
      return [
        'toaster',
        { [`toaster-${this.position}`]: hasFixedPosition }
      ]
    }
  }
}
</script>
