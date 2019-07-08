<template>
  <CSidebarNavItem :classes="['c-hidden-cn', this.classes]">
    <a class="c-nav-label" :href="url">
      <i v-if="icon" :class="icon"></i>
      {{name}}
    </a>
  </CSidebarNavItem>
</template>

<script>
import CSidebarNavItem from './CSidebarNavItem'
export default {
  name: 'CSidebarNavLabel',
  components: {
    CSidebarNavItem,
  },
  props: {
    name: String,
    url: {
      type: String,
      default: '#'
    },
    icon: String,
    classes: String
  }
}
</script>
