<template functional>
  <div class="brand-card">
    <div :class="`brand-card-header bg-${props.variant}`">
      <i
        class="position-absolute"
        :class="props.iconClasses || `fa fa-${props.variant}`"
      ></i>
      <slot></slot>
    </div>
    <div class="brand-card-body">
      <div>
        <div class="text-value">{{props.rightHeader}}</div>
        <div class="text-uppercase text-muted small">{{props.rightFooter}}</div>
      </div>
      <div>
        <div class="text-value">{{props.leftHeader}}</div>
        <div class="text-uppercase text-muted small">{{props.leftFooter}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSocial',
  props: {
    variant: {
      type: String,
      default: 'facebook'
    },
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    },
    iconClasses: String
  }
}
</script>
