<template functional>
  <div class="card">
    <div
      class="card-body clearfix d-flex align-items-center"
      :class="props.noPadding ? 'p-0' : p-3"
    >
      <i
        :class="[props.addIconClasses, props.noPadding ? 'p-4' : 'p-3']"
        class="float-left mr-3 font-2xl"
      ></i>
      <div>
        <div class="text-primary text-value-sm">
          {{props.header}}
        </div>
        <div class="text-muted text-uppercase font-weight-bold small">
          {{props.text}}
        </div>
      </div>
    </div>
    <div
      v-if="props.link || $slots.default"
      class="card-footer px-3 py-2"
    >
      <slot>
        <CLink
          class="font-weight-bold font-xs btn-block text-muted"
          :href="props.link"
        >
          {{props.linkText}}
          <i class="fa fa-angle-right float-right font-lg"></i>
        </CLink>
      </slot>
    </div>
  </div>
</template>

<script>
import CLink from '../Link/CLink'
export default {
  name: 'CWidgetIcon',
  props: {
    addIconClasses: String,
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    linkText: {
      type: String,
      default: 'View More'
    },
    link: String,
    noPadding: Boolean
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_clearfix.scss";
  @import "~@coreui/coreui/scss/utilities/_display.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
