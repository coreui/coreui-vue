<template>
  <CSidebarNavDropdown
    v-if="item && item.children"
    :name="item.name"
    :url="item.url"
    :icon="item.icon"
    :open="item.open"
    :route="item.route"
    :class="item.class"
  >
    <CSidebarNavItem
      v-for="(dropdownItem, key) in item.children"
      :key="key"
      :item="dropdownItem"
    />
  </CSidebarNavDropdown>
  <li
    v-else
    :class="['c-nav-item', item ? item.class : null]"
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
    item: Object
    // name: String,
    // url: String,
    // icon: String,
    // open: String,
    // children: Array
  }
}
</script>
