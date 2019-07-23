<template>
  <div class="c-card">
    <div
      class="c-card-header c-content-center c-text-white c-p-0"
      :class="[`c-bg-${variant}`, addHeaderClasses]"
    >
      <slot></slot>
    </div>
    <slot name="body">
      <div class="c-card-body c-row c-text-center">
        <div class="c-col">
          <div v-if="rightHeader" class="c-text-value-lg">
            {{rightHeader}}
          </div>
          <div v-if="rightFooter" class="c-text-uppercase c-text-muted c-small">
            {{rightFooter}}
          </div>
        </div>
        <div class="c-vr"></div>
        <div class="c-col">
          <div v-if="leftHeader" class="c-text-value-lg">
            {{leftHeader}}
          </div>
          <div v-if="leftFooter" class="c-text-uppercase c-text-muted c-small">
            {{leftFooter}}
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetBrand',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    rightHeader: String,
    rightFooter: String,
    leftHeader: String,
    leftFooter: String,
    addHeaderClasses: [String, Array, Object]
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
