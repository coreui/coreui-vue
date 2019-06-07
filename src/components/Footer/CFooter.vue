<template>
  <footer :class="classList">
    <slot>Footer</slot>
  </footer>
</template>

<script>
export default {
  name: 'CFooter',
  props: {
    fixed: Boolean
  },
  computed: {
    classList () {
      return [
        'c-app-footer c-footer',
        { 'c-footer-fixed': this.fixed }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/footer.scss";
</style>
