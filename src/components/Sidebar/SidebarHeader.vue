<template>
  <div v-if="hasSlotDefault" class="sidebar-header">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'sidebar-header',
  computed: {
    hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
}
</script>
