<template>
  <div :class="`c-callout ${color ? 'c-callout-' + color : ''}`">
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
