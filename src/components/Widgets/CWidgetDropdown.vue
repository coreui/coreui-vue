<template>
  <div class="card" :class="`bg-${variant}`">
    <slot name="header"></slot>
    <div class="card-body pb-0">
      <slot></slot>
      <h4 v-if="header" class="mb-0">{{header}}</h4>
      <p v-if="text">{{text}}</p>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetDropdown',
  props: {
    variant: String,
    header: String,
    text: String
  }
}
</script>
