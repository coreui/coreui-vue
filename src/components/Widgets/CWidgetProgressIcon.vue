<template functional>
  <div :class="props.inverse ? `card text-white bg-${props.variant}` : 'card'">
    <div class="card-body">
      <div
        v-if="props.iconClasses"
        class="h1 text-muted text-right mb-4"
      >
        <i :class="props.iconClasses"></i>
      </div>
      <div class="h4 mb-0">{{props.header}}</div>
      <small class="text-muted text-uppercase font-weight-bold">{{props.text}}</small>
      <slot>
        <CProgress
          :variant="!props.inverse ? props.variant : ''"
          :value="props.value"
          :class="props.inverse ? 'progress-white' : ''"
          class="progress-xs my-3 mb-0"
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
