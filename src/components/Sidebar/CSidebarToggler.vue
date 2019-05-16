<template>
  <button
    class="c-header-toggler"
    type="button"
    @click="$root.$emit(`c-${aside ? 'aside' : 'sidebar' }-toggle`)"
  >
    <span class="c-header-toggler-icon"/>
  </button>
</template>

<script>
export default {
  name: 'CSidebarToggler',
  props: {
    aside: Boolean
  }
}
</script>
