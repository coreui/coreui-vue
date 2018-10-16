<template>
  <div :class="classList">
    <slot>Callout</slot>
  </div>
</template>

<script>
export default {
  name: 'CCallout',
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
  }
}
</script>
