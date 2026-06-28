<template>
  <CSidebar class="border-end">
    <CSidebarNav variant="tree">
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" :icon="cilFolder" /> Parent item
        </template>
        <CNavItem href="#">
          <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Child item
        </CNavItem>
        <CNavGroup visible>
          <template #togglerContent>
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested group
          </template>
          <CNavItem href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested child
          </CNavItem>
          <CNavItem href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nested child
          </CNavItem>
        </CNavGroup>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilFolder } from '@coreui/icons'
</script>
