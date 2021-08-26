<template>
  <CSidebar position="fixed" selfHiding="md" size="lg" class="docs-sidebar elevation-0 border-end ps-xl-4">
    <CSidebarBrand class="justify-content-start ps-3">
      <img :src="logo" alt="CoreUI for Vue.js logo" height="50" className="d-block mt-4 mb-5" />
    </CSidebarBrand>
    <NavbarLinks />
    <CSidebarNav>
      <SidebarChild v-for="item in sidebarItems" :key="item.link || item.text" :item="item" />
    </CSidebarNav>
  </CSidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarItems } from '../composables'
import NavbarLinks from './_NavbarLinks.vue'
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
    console.log(sidebarItems.value)
    return {
      logo,
      sidebarItems,
    }
  },
})
</script>