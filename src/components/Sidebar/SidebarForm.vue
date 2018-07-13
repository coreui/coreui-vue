<template>
  <div v-if="hasSlotDefault" class="sidebar-form">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'sidebar-form',
  computed: {
    hasSlotDefault() {
      return !!this.$slots.default;
    }
  }
}
</script>
