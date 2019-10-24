<template>
  <component :is="tag" :class="classList">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    tag: {
      type: String,
      default: 'header'
    },
    colorScheme: {
      type: String,
      default: 'light'
    },
    fixed: {
      type: Boolean,
      default: true
    },
    withSubheader: Boolean
  },
  computed: {
    classList () {
      return [
        'c-header',
        `c-header-${this.colorScheme}`,
        { 
          'c-header-fixed': this.fixed,
          'c-header-with-subheader': this.withSubheader
        }
      ]
    }
  }
}
</script>
