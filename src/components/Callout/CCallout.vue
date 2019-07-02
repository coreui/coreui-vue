<template functional>
  <div :class="`c-callout ${props.variant ? 'c-callout-' + props.variant : ''}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CCallout',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/callout.scss";
</style>
