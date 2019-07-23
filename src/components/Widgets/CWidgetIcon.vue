<template>
  <div class="c-card">
    <slot name="header"></slot>
    <div
      class="c-card-body c-clearfix c-d-flex c-align-items-center"
      :class="noPadding ? 'c-p-0' : 'c-p-3'"
    >
      <div
        class="c-float-left c-mr-3 c-text-white"
        :class="[`c-bg-${variant}`, noPadding ? 'c-p-4' : 'c-p-3']"
      >
        <slot></slot>
      </div>
      <div>
        <div v-if="header" :class="`c-text-value c-text-${variant}`">
          {{header}}
        </div>
        <div
          v-if="text"
          class="c-text-muted c-text-uppercase c-font-weight-bold c-small"
        >
          {{text}}
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetIcon',
  props: {
    header: String,
    text: String,
    noPadding: Boolean,
    variant: String
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_clearfix.scss";
  @import "~@coreui/coreui/scss/utilities/_display.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_typography.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
