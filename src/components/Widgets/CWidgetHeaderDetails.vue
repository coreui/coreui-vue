<template>
  <div class="c-card" :class="`c-bg-${variant}`">
    <div class="c-card-header">
      <div class="c-font-weight-bold">
        <span v-if="rightHeader">{{rightHeader}}</span>
        <span v-if="leftHeader" class="c-float-right">{{leftHeader}}</span>
      </div>
      <div>
        <span>
          <small v-if="rightFooter">{{rightFooter}}</small>
        </span>
        <span class="c-float-right">
          <small v-if="leftFooter">{{leftFooter}}</small>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetHeaderDetails',
  props: {
    variant: String,
    rightHeader: String,
    rightFooter: String,
    leftHeader: String,
    leftFooter: String
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_float.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
