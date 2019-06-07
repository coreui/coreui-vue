<template functional>
  <div :class="props.inverse ? `c-card c-text-white c-bg-${props.variant}` : 'c-card'">
    <div class="c-card-body">
      <div class="c-h4 c-m-0">{{props.header}}</div>
      <div>{{props.text}}</div>
      <slot>
        <CProgress
          :variant="!props.inverse ? props.variant : ''"
          :value = "props.value"
          :class="props.inverse ? 'c-progress-white' : ''"
          class="c-progress-xs c-my-3 c-mb-0"
        />
      </slot>
      <small class="c-text-muted">
        {{props.footer}}
      </small>
    </div>
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
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    footer: {
      type: String,
      default: 'footer:string'
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
  @import "~@coreui/coreui/scss/partials/type.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_typography.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
