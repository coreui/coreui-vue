<template>
  <header :class="classList">
    <slot>Header</slot>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    fixed: Boolean
  },
  computed: {
    classList () {
      return [
        'c-header c-app-header c-header-light',
        { 'c-header-fixed': this.fixed}
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/header.scss";
</style>
