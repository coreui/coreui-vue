<template>
  <div class="card">
    <div
      class="card-header content-center text-white p-0"
      :class="[`bg-${color}`, addHeaderClasses]"
    >
      <slot></slot>
    </div>
    <slot name="body">
      <div class="card-body row text-center">
        <div class="col">
          <div v-if="rightHeader" class="text-value-lg">
            {{rightHeader}}
          </div>
          <div v-if="rightFooter" class="text-uppercase text-muted small">
            {{rightFooter}}
          </div>
        </div>
        <div class="c-vr"></div>
        <div class="col">
          <div v-if="leftHeader" class="text-value-lg">
            {{leftHeader}}
          </div>
          <div v-if="leftFooter" class="text-uppercase text-muted small">
            {{leftFooter}}
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetBrand',
  props: {
    color: String,
    rightHeader: String,
    rightFooter: String,
    leftHeader: String,
    leftFooter: String,
    addHeaderClasses: [String, Array, Object]
  }
}
</script>