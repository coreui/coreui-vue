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
        'toaster',
        { 'd-flex flex-column-reverse': this.reverse }
      ]
    }
  }
}
</script>

<style scoped>
.toaster {
  z-index: 1100
}
</style>
