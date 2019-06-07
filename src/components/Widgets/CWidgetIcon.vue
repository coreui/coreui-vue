<template>
  <div class="c-card">
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
        <div class="c-text-primary c-text-value-sm">
          {{header}}
        </div>
        <div class="c-text-muted c-text-uppercase c-font-weight-bold c-small">
          {{text}}
        </div>
      </div>
    </div>
    <div
      v-if="link || $slots.link"
      class="c-card-footer c-px-3 c-py-2"
    >
      <slot name="link">
        <CLink
          class="c-font-weight-bold c-font-xs c-btn-block c-text-muted"
          :href="link"
        >
          {{linkText}}
          <CIcon name="arrowRight" class="c-float-right" width="16"/>
        </CLink>
      </slot>
    </div>
  </div>
</template>

<script>
import CLink from '../Link/CLink'
import { CIcon as CIconRaw } from '@coreui/icons/vue'
import { arrowRight } from '@coreui/icons'
const CIcon = Object.assign({}, CIconRaw, { icons : { arrowRight }})

export default {
  name: 'CWidgetIcon',
  components: { CLink, CIcon },
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
    noPadding: Boolean,
    variant: {
      type: String,
      default: 'primary'
    }
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
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
