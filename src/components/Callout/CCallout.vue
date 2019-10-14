<template functional>
  <div :class="`callout ${props.color ? 'callout-' + props.color : ''}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CCallout',
  props: {
    color: String
  }
}
</script>
