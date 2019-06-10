<template>
  <CSidebarNavDropdown
    v-if="item.children"
    :name="item.name"
    :url="item.url"
    :icon="item.icon"
    :open="item.open"
  >
    <CSidebarNavItem
      v-for="(dropdownItem, key) in item.children"
      :key="key"
      :item="dropdownItem"
    />
  </CSidebarNavDropdown>
  <li
    :class="['c-nav-item', item.classes]"
    @click="hideMobile"
    v-else
  >
    <slot>
      <CSidebarNavLink v-bind="item"/>
    </slot>
  </li>
</template>

<script>
import { hideMobile } from './hideMobile'
export default {
  name: 'CSidebarNavItem',
  mixins: [ hideMobile ],
  props: {
    item: [String, Array, Object]
  }
}
</script>
