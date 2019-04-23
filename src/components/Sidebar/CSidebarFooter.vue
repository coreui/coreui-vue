<template functional>
  <div v-if="$slots.default" class="sidebar-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSidebarFooter'
}
</script>
