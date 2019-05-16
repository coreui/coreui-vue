<template functional>
  <div class="card" :class="`c-bg-${props.variant}`">
    <div class="c-card-body c-pb-0">
      <slot name="dropdown"></slot>
      <h4 class="c-mb-0">{{props.header}}</h4>
      <p>{{props.text}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetDropdown',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/widgets.scss";
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";

</style>
