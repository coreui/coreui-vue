<template>
  <component :is="tag" class="c-subheader">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CSubheader',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>