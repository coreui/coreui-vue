<template>
  <CSidebar class="border-end">
    <CSidebarNav>
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon customClassName="nav-icon" :icon="cilPuzzle" /> Items group
        </template>
        <CNavItem href="#">Items group item</CNavItem>
        <CNavItem href="#">Items group item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CNavItem, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilPuzzle } from '@coreui/icons'
</script>
