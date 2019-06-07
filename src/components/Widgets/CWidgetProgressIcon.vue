<template functional>
  <div :class="props.inverse ? `c-card c-text-white c-bg-${props.variant}` : 'c-card'">
    <div class="c-card-body">
      <div
        v-if="$slots.default"
        class="c-h1 c-text-muted c-text-right c-mb-4"
      >
        <slot></slot>
        <!-- <i :class="props.iconClasses"></i> -->
      </div>
      <div class="c-h4 c-mb-0">{{props.header}}</div>
      <small class="c-text-muted c-text-uppercase c-font-weight-bold">
        {{props.text}}
      </small>
      <slot name="progress">
        <CProgress
          :variant="!props.inverse ? props.variant : ''"
          :value="props.value"
          :class="props.inverse ? 'c-progress-white' : ''"
          class="c-progress-xs c-my-3 c-mb-0"
        />
      </slot>
    </div>
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
    iconClasses: String,
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
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
