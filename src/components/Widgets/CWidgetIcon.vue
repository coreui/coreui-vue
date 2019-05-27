<template functional>
  <div class="c-card">
    <div
      class="c-card-body c-clearfix c-d-flex c-align-items-center"
      :class="props.noPadding ? 'c-p-0' : c-p-3"
    >
      <i
        :class="[props.addIconClasses, props.noPadding ? 'c-p-4' : 'c-p-3']"
        class="c-float-left c-mr-3 c-font-2xl"
      ></i>
      <div>
        <div class="c-text-primary c-text-value-sm">
          {{props.header}}
        </div>
        <div class="c-text-muted c-text-uppercase c-font-weight-bold c-small">
          {{props.text}}
        </div>
      </div>
    </div>
    <div
      v-if="props.link || $slots.default"
      class="c-card-footer c-px-3 c-py-2"
    >
      <slot>
        <CLink
          class="c-font-weight-bold c-font-xs c-btn-block c-text-muted"
          :href="props.link"
        >
          {{props.linkText}}
          <i class="fa fa-angle-right c-float-right c-font-lg"></i>
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
  //Icons
  @import '~@coreui/icons/css/coreui-icons.min.css';
</style>
