<template>
  <div class="card" :class="`bg-${variant} text-white`">
    <div class="card-header">
      <div class="font-weight-bold">
        <span v-if="rightHeader">{{rightHeader}}</span>
        <span v-if="leftHeader" class="float-right">{{leftHeader}}</span>
      </div>
      <div>
        <span>
          <small v-if="rightFooter">{{rightFooter}}</small>
        </span>
        <span class="float-right">
          <small v-if="leftFooter">{{leftFooter}}</small>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetHeaderDetails',
  props: {
    variant: String,
    rightHeader: String,
    rightFooter: String,
    leftHeader: String,
    leftFooter: String
  }
}
</script>