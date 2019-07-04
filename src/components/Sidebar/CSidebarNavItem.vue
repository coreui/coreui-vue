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
    v-else
    :class="['c-nav-item', item.classes]"
  >
    <slot>
      <CSidebarNavLink v-bind="item"/>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'CSidebarNavItem',
  props: {
    item: [String, Array, Object]
  }
}
</script>
