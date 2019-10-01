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
    withSubheader: Boolean
  },
  computed: {
    classList () {
      return [
        'c-header c-header-light',
        { 
          'c-header-fixed': this.fixed,
          'c-header-with-subheader': this.withSubheader
        }
      ]
    }
  }
}
</script>
