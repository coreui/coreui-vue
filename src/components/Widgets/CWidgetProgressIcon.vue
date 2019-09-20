<template>
  <div :class="inverse ? `card text-white bg-${variant}` : 'card'">
    <slot name="header"></slot>
    <div class="card-body">
      <div
        v-if="$slots.default"
        class="h1 text-muted text-right mb-4"
      >
        <slot></slot>
      </div>
      <div v-if="header" class="h4 mb-0">{{header}}</div>
      <small
        v-if="text"
        class="text-muted text-uppercase font-weight-bold"
      >
        {{text}}
      </small>
      <slot name="progress">
        <CProgress
          :variant="!inverse ? variant : ''"
          :value="value"
          :class="inverse ? 'progress-white' : ''"
          class="progress-xs my-3 mb-0"
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
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_typography.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
