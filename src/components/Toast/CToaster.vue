<template>
  <div
    :class="toasterClasses"
    :style="computedStyles"
  >
    <slot></slot>
  </div>
</template>

<script>
import toastMixin from './toastMixin'
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
    reverse: Boolean
  },
  computed: {
    toasterClasses () {
      return [
        'c-toaster',
        { 'c-d-flex c-flex-column-reverse': this.reverse }
      ]
    }
  }
}
</script>

<style lang="scss">
.toaster {
  z-index: 1100
}
@import "~@coreui/coreui/scss/partials/toasts.scss";
@import "~@coreui/coreui/scss/utilities/_flex.scss";
</style>
