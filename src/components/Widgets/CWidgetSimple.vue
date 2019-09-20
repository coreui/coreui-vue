<template>
  <div class="card">
    <slot name="header"></slot>
    <div class="card-body text-center">
      <div
        v-if="header"
        class="text-muted small text-uppercase font-weight-bold"
      >
        {{header}}
      </div>
      <div v-if="text" class="h2 py-3">{{text}}</div>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSimple',
  props: {
    header: String,
    text: String
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
</style>
