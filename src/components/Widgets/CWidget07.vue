<template functional>
  <div class="card">
    <div class="card-header"
         :class="props.cardClasses">
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
      <div class="chart-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidget07',
  props: {
    cardClasses: {
      type: String,
      default: 'bg-primary'
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
