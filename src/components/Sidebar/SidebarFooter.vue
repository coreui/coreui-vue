<template>
  <div v-if="hasSlotDefault" class="sidebar-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarFooter',
  computed: {
    hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
}
</script>
