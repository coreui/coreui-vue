<template>
  <div :class="inverse ? `c-card c-text-white c-bg-${variant}` : 'c-card'">
    <slot name="header"></slot>
    <div class="c-card-body">
      <div v-if="header" class="c-h4 c-m-0">{{header}}</div>
      <div v-if="text">{{text}}</div>
      <slot>
        <CProgress
          :variant="!inverse ? variant : ''"
          :value="value"
          :class="inverse ? 'c-progress-white' : ''"
          class="c-progress-xs c-my-3 c-mb-0"
        />
      </slot>
      <small v-if="footer" class="c-text-muted">
        {{footer}}
      </small>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import CProgress from '../Progress/CProgress'
export default {
  name: 'CWidgetProgress',
  components: {
    CProgress
  },
  props: {
    header: String,
    text: String,
    footer: String,
    variant: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/type.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_typography.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
