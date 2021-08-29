<template>
  <CSidebar position="fixed" selfHiding="md" size="lg" class="docs-sidebar elevation-0 border-end ps-xl-4">
    <CSidebarBrand class="justify-content-start ps-3">
      <img :src="logo" alt="CoreUI for Vue.js logo" height="50" className="d-block mt-4 mb-5" />
    </CSidebarBrand>
    <SidebarNav :items="sidebarItems" />
  </CSidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarItems } from '../composables'
import { SidebarNav } from './SidebarNav'
import logo from '../../assets/brand/coreui-vue.svg'

export default defineComponent({
  name: 'Sidebar',

  components: {
    SidebarNav,
  },

  setup() {
    const sidebarItems = useSidebarItems()
    console.log(sidebarItems)
    return {
      logo,
      sidebarItems
    }
  },
})
</script>