<template>
  <component :is="tag" class="navbar-text">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CNavbarText',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
