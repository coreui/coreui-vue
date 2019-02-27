<template>
  <div :class="classList">
    <slot>Callout</slot>
  </div>
</template>

<script>
export default {
  name: 'Callout',
  props: {
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList () {
      return [
        'callout',
        this.calloutVariant
      ]
    },
    calloutVariant () {
      return this.variant ? `callout-${this.variant}` : ''
    }
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be removed in coreui-vue 3.0 version')
  }
}
</script>
