<template>
  <button
    class="c-sidebar-minimizer"
    type="button"
    @click="$root.$emit('c-sidebar-minimize', $event)"
  >
  </button>
</template>

<script>
export default {
  name: 'CSidebarMinimizer'
}
</script>
