<template>
  <component :is="tag" :class="classList">
    <slot></slot>
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
    fixed: {
      type: Boolean,
      default: true
    }
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
