<template functional>
  <div class="c-card">
    <div
      class="c-card-header c-content-center c-text-white c-p-0"
      :class="[`c-bg-${props.variant}`, props.addHeaderClasses]"
    >
      <slot></slot>
    </div>
    <div class="c-card-body c-row c-text-center">
      <div class="c-col">
        <div class="c-text-value-lg">
          {{props.rightHeader}}
        </div>
        <div class="c-text-uppercase c-text-muted c-small">
          {{props.rightFooter}}
        </div>
      </div>
      <div class="c-vr"></div>
      <div class="c-col">
        <div class="c-text-value-lg">
          {{props.leftHeader}}
        </div>
        <div class="c-text-uppercase c-text-muted c-small">
          {{props.leftFooter}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSocial',
  props: {
    variant: String,
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    },
    addHeaderClasses: String
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/partials/grid.scss";
  @import "~@coreui/coreui/scss/utilities/_position.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
