<template>
  <button
    class="navbar-toggler"
    type="button"
    @click="$root.$emit('c-sidebar-toggle')"
  >
    <span class="navbar-toggler-icon" />
  </button>
</template>

<script>

export default {
  name: 'CSidebarToggler'
}
</script>
