<template>
  <div :class="inverse ? `c-card c-text-white c-bg-${variant}` : 'c-card'">
    <slot name="header"></slot>
    <div class="c-card-body">
      <div
        v-if="$slots.default"
        class="c-h1 c-text-muted c-text-right c-mb-4"
      >
        <slot></slot>
      </div>
      <div v-if="header" class="c-h4 c-mb-0">{{header}}</div>
      <small
        v-if="text"
        class="c-text-muted c-text-uppercase c-font-weight-bold"
      >
        {{text}}
      </small>
      <slot name="progress">
        <CProgress
          :variant="!inverse ? variant : ''"
          :value="value"
          :class="inverse ? 'c-progress-white' : ''"
          class="c-progress-xs c-my-3 c-mb-0"
        />
      </slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import CProgress from '../Progress/CProgress'
export default {
  name: 'CWidgetProgressIcon',
  components: {
    CProgress
  },
  props: {
    header: String,
    text: String,
    variant: {
      type: String,
      default: 'primary'
    },
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
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_typography.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
