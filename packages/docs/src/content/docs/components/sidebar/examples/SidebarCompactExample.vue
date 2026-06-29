<template>
  <CSidebar class="border-end">
    <CSidebarNav compact>
      <CNavTitle>Compact nav</CNavTitle>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Dashboard
      </CNavItem>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilLayers" /> Components
      </CNavItem>
      <CNavGroup visible>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Nested group
        </template>
        <CNavItem href="#">Compact item</CNavItem>
        <CNavItem href="#">Compact item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'
</script>
