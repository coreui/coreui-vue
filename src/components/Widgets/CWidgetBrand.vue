<template>
  <div class="card">
    <div
      class="card-header content-center text-white p-0"
      :class="[`bg-${variant}`, addHeaderClasses]"
    >
      <slot></slot>
    </div>
    <slot name="body">
      <div class="card-body row text-center">
        <div class="col">
          <div v-if="rightHeader" class="text-value-lg">
            {{rightHeader}}
          </div>
          <div v-if="rightFooter" class="text-uppercase text-muted small">
            {{rightFooter}}
          </div>
        </div>
        <div class="vr"></div>
        <div class="col">
          <div v-if="leftHeader" class="text-value-lg">
            {{leftHeader}}
          </div>
          <div v-if="leftFooter" class="text-uppercase text-muted small">
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
    variant: String,
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
