<template>
  <component :is="tag" :class="classList">
    <slot>Footer</slot>
  </component>
</template>

<script>
export default {
  name: 'CFooter',
  props: {
    tag: {
      type: String,
      default: 'footer'
    },
    fixed: Boolean
  },
  computed: {
    classList () {
      return [
        'c-footer',
        { 'c-footer-fixed': this.fixed }
      ]
    }
  }
}
</script>
