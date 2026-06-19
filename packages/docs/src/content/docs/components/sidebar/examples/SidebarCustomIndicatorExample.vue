<template>
  <CSidebar class="border-end">
    <CSidebarNav>
      <CNavGroup visible>
        <template #togglerContent="{ visible }">
          <CIcon customClassName="nav-icon" :icon="cilPuzzle" /> Items group
          <span class="nav-group-toggle-indicator">
            <CIcon class="icon icon-sm" :icon="visible ? cilMinus : cilPlus" />
          </span>
        </template>
        <CNavItem href="#">Items group item</CNavItem>
        <CNavItem href="#">Items group item</CNavItem>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent="{ visible }">
          <CIcon customClassName="nav-icon" :icon="cilPuzzle" /> Alternate indicator
          <span class="nav-group-toggle-indicator">
            <CIcon
              class="icon icon-sm"
              :icon="visible ? cilChevronCircleUpAlt : cilChevronCircleDownAlt"
            />
          </span>
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
import {
  cilChevronCircleDownAlt,
  cilChevronCircleUpAlt,
  cilMinus,
  cilPlus,
  cilPuzzle,
} from '@coreui/icons'
</script>
