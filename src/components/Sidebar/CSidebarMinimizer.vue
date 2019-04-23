<template>
  <button
    class="sidebar-minimizer"
    type="button"
    @click="$root.$emit('c-sidebar-toggle-minimize')"
  >
  </button>
</template>

<script>
export default {
  name: 'CSidebarMinimizer'
}
</script>
