<template functional>
  <div class="c-card" :class="`c-bg-${props.variant}`">
    <div class="c-card-header">
      <div class="c-font-weight-bold">
        <span>{{props.rightHeader}}</span>
        <span class="c-float-right">{{props.leftHeader}}</span>
      </div>
      <div>
        <span>
          <small>{{props.rightFooter}}</small>
        </span>
        <span class="c-float-right">
          <small>{{props.leftFooter}}</small>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSmallText',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
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
    }
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
