<template>
  <li class="c-nav-title">
    <slot>
      {{name}}
    </slot>
  </li>
</template>

<script>
export default {
  name: 'CSidebarNavTitle',
  props: {
    name: String
  }
}
</script>
