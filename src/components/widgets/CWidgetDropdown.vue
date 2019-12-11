<template>
  <div class="card" :class="`bg-${color} text-white`">
    <div class="card-body pb-0 d-flex justify-content-between">
      <div>
        <div v-if="header" class="text-value-lg">{{header}}</div>
        <div v-if="text">{{text}}</div>
      </div>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetDropdown',
  props: {
    color: String,
    header: String,
    text: String
  }
}
</script>
