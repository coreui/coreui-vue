<template functional>
  <div class="card">
    <div class="card-body text-center">
      <div class="text-muted small text-uppercase font-weight-bold">{{props.header}}</div>
        <div class="h2 py-3">{{props.text}}</div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSimple',
  props: {
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
</style>
