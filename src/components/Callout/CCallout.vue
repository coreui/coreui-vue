<template functional>
  <div :class="`callout ${props.variant ? 'callout-' + props.variant : ''}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CCallout',
  props: {
    variant: String
  }
}
</script>
