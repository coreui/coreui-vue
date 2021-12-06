<template>
  <CSidebar position="fixed" size="lg" class="docs-sidebar elevation-0 border-end ps-xl-4">
    <CSidebarBrand class="justify-content-start ps-3">
      <img :src="logo" alt="CoreUI for Vue.js logo" height="50" class="d-block mt-4 mb-5" />
    </CSidebarBrand>
    <CDropdown class="ms-3 me-5 mb-4">
      <CDropdownToggle color="primary" variant="outline"> Vue.js </CDropdownToggle>
      <CDropdownMenu class="w-100">
        <CDropdownItem href="https://coreui.io/angular/docs/4.0/" target="_blank">
          Angular
        </CDropdownItem>
        <CDropdownItem href="https://coreui.io/docs/4.1/" target="_blank">
          JavaScript / Vanilla JS
        </CDropdownItem>
        <CDropdownItem href="https://coreui.io/react/docs/4.1/" target="_blank">
          React.js
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
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
    return {
      logo,
      sidebarItems,
    }
  },
})
</script>
