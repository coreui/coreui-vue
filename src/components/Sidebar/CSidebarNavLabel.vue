<template>
  <CSidebarNavItem class="c-hidden-cn">
    <a class="c-nav-label" v-bind="url ? { href:url } : {}">
      <slot>
        <i v-if="icon" :class="icon"></i>
        {{name}}
      </slot>
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
    url: String,
    icon: String,
  }
}
</script>
