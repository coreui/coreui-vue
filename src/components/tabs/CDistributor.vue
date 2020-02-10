<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CDistributor',
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  provide () {
    return {
      distributed: this.props
    }
  },
  computed: {
    props () {
      return this.$attrs
    }
  }
}
</script>