<template>
  <div v-if="hasSlotDefault" class="sidebar-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sidebar-footer',
  computed: {
    hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
}
</script>
