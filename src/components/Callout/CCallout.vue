<template functional>
  <div :class="`callout ${props.variant ? 'c-callout-' + props.variant : ''}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CCallout',
  props: {
    variant: String,
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/callout.scss";
</style>
