<template>
  <div
    class="toaster"
    style="z-index:1100"
    :style="computedPosition"
  >
    <slot></slot>
  </div>
</template>

<script>
import computedPosition from './computedPosition'
export default {
  name: 'Toaster',
  provide: {
    inToaster: true
  },
  mixins: [computedPosition],
  props: {

  }
}
</script>
