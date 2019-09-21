<template>
  <header :class="classList">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    fixed: Boolean,
    light: Boolean,
    withSubheader: Boolean
  },
  computed: {
    classList () {
      return [
        'c-header c-header-light',
        { 
          'c-header-fixed': this.fixed,
          'c-header-light': this.light,
          'c-header-with-subheader': this.withSubheader
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/header.scss";
</style>
