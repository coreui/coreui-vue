<template functional>
  <div class="card" :class="`bg-${props.variant}`">
    <div class="card-header">
      <div class="font-weight-bold">
        <span>{{props.rightHeader}}</span>
        <span class="float-right">{{props.leftHeader}}</span>
      </div>
      <div>
        <span>
          <small>{{props.rightFooter}}</small>
        </span>
        <span class="float-right">
          <small>{{props.leftFooter}}</small>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSmallText',
  props: {
    variant: {
      type: String,
      default: 'primary'
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
    }
  }
}
</script>
