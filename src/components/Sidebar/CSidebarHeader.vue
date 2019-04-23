<template functional>
  <div v-if="$slots.default" class="sidebar-header">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'CSidebarHeader'
}
</script>
