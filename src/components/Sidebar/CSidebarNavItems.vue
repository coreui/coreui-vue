<template>
  <ul class="c-nav">
    <template v-for="(item, index) in items">
      <template v-if="item.title">
        <CSidebarNavTitle
          :key="index"
          :name="item.name"
          :class="item.class"
          :wrapper="item.wrapper"
        />
      </template>
      <template v-else-if="item.divider">
        <CSidebarNavDivider :key="index" :classes="item.class"/>
      </template>
      <template v-else-if="item.label">
        <CSidebarNavLabel
          :key="index"
          :name="item.name"
          :url="item.url"
          :icon="item.icon"
          :classes="item.class"
        />
      </template>
      <template v-else>
        <CSidebarNavItem :key="index" :item="item"/>
      </template>
    </template>
  </ul>
</template>

<script>
import CSidebarNavDivider from './CSidebarNavDivider'
import CSidebarNavTitle from './CSidebarNavTitle'
import CSidebarNavItem from './CSidebarNavItem'
import CSidebarNavLabel from './CSidebarNavLabel'

export default {
  name: 'CSidebarNavItems',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarNavItem,
    CSidebarNavLabel
  }
}
</script>
