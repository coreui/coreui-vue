<template>
  <component :is="tag" :class="classList">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CWrapper',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [
        'c-wrapper',
        { 'c-wrapper-fluid' : this.fluid }
      ]
    }
  }
}
</script>
