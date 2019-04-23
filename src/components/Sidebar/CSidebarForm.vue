<template functional>
  <div v-if="$slots.default" class="sidebar-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSidebarForm'
}
</script>
