<template functional>
  <div class="c-brand-card">
    <div :class="`c-brand-card-header c-bg-${props.variant}`">
      <i
        class="c-position-absolute"
        :class="props.iconClasses || `fa fa-${props.variant}`"
      ></i>
      <slot></slot>
    </div>
    <div class="c-brand-card-body">
      <div>
        <div class="c-text-value">
          {{props.rightHeader}}
        </div>
        <div class="c-text-uppercase c-text-muted c-small">
          {{props.rightFooter}}
        </div>
      </div>
      <div>
        <div class="c-text-value">
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
    variant: {
      type: String,
      default: 'facebook'
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
    },
    iconClasses: String
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  // @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/partials/brand-card.scss";

  @import "~@coreui/coreui/scss/utilities/_position.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
