<template>
  <div v-if="hasSlotDefault" class="sidebar-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSidebarFooter',
  computed: {
    hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
}
</script>
