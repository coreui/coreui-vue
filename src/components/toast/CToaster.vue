<template>
  <div
    :class="toasterClasses"
    :style="computedStyles"
  >
    <slot></slot>
  </div>
</template>

<script>
import toastMixin from './toast-mixin'

export default {
  name: 'CToaster',
  provide () {
    const toaster = {}
    Object.defineProperty(toaster, 'props', {
      get: () => this._props
    })
    return { toaster }
  },
  mixins: [ toastMixin ],
  props: {
    reverse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    toasterClasses () {
      return [
        'toaster',
        { 'd-flex flex-column-reverse': this.reverse }
      ]
    }
  }
}
</script>
