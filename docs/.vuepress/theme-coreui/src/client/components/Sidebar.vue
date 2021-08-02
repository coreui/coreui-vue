<template>
  <aside class="sidebar sidebar-lg sidebar-fixed sidebar-self-hiding-md border-end ps-xl-4 docs-sidebar elevation-0">
    <div class="sidebar-brand justify-content-start ps-3">
      <img :src="logo" alt="CoreUI for Vue.js logo" height="50" className="d-block mt-4 mb-5" />
    </div>
    <NavbarLinks />

    <slot name="top" />

    <ul class="sidebar-nav">
      <SidebarChild v-for="item in sidebarItems" :key="item.link || item.text" :item="item" />
    </ul>

    <slot name="bottom" />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarItems } from '../composables'
import NavbarLinks from './NavbarLinks.vue'
import { SidebarChild } from './SidebarChild'
import logo from '../../assets/brand/coreui-vue.svg'

export default defineComponent({
  name: 'Sidebar',

  components: {
    NavbarLinks,
    SidebarChild,
  },

  setup() {
    const sidebarItems = useSidebarItems()
    return {
      logo,
      sidebarItems,
    }
  },
})
</script>

<style scoped>
.sidebar {
  --cui-sidebar-bg: #f0f4f7;
  --cui-sidebar-brand-bg: transparent;
  --cui-sidebar-brand-color: rgba(44, 56, 74, 0.95);
  --cui-sidebar-nav-link-color: rgba(44, 56, 74, 0.95);
  --cui-sidebar-nav-link-active-color: #321fdb;
  --cui-sidebar-nav-link-hover-color: #321fdb;
  --cui-sidebar-nav-group-bg: transparent;
  --cui-sidebar-nav-group-toggle-show-color: #321fdb;
}
</style>