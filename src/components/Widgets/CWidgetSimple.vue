<template functional>
  <div class="c-card">
    <div class="c-card-body c-text-center">
      <div class="c-text-muted c-small c-text-uppercase c-font-weight-bold">
        {{props.header}}
      </div>
      <div class="c-h2 c-py-3">{{props.text}}</div>
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
