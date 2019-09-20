<template>
  <div class="card">
    <slot name="header"></slot>
    <div
      class="card-body clearfix d-flex align-items-center"
      :class="noIconPadding ? 'p-0' : 'p-3'"
    >
      <div
        class="float-left mr-3 text-white"
        :class="[`bg-${variant}`, noIconPadding ? 'p-4' : 'p-3']"
      >
        <slot></slot>
      </div>
      <div>
        <div v-if="header" :class="`text-value text-${variant}`">
          {{header}}
        </div>
        <div
          v-if="text"
          class="text-muted text-uppercase font-weight-bold small"
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
    noIconPadding: Boolean,
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
