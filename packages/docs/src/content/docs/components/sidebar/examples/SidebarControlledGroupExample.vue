<template>
  <CSidebar class="border-end">
    <CSidebarNav>
      <CNavItem href="#">
        <CIcon custom-class-name="nav-icon" :icon="cilSpeedometer" /> Dashboard
      </CNavItem>
      <CNavGroup :visible="visible" @update:visible="handleVisibleChange">
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilPuzzle" /> Active section
        </template>
        <CNavItem href="#">Overview</CNavItem>
        <CNavItem href="#">Settings</CNavItem>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilLayers" /> Components
        </template>
        <CNavItem href="#">Base</CNavItem>
        <CNavItem href="#">Buttons</CNavItem>
        <CNavGroup>
          <template #togglerContent>
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Forms
          </template>
          <CNavItem href="#">Inputs</CNavItem>
          <CNavItem href="#">Selects</CNavItem>
        </CNavGroup>
      </CNavGroup>
      <CNavGroup>
        <template #togglerContent>
          <CIcon custom-class-name="nav-icon" :icon="cilSettings" /> Settings
        </template>
        <CNavItem href="#">Profile</CNavItem>
        <CNavItem href="#">Security</CNavItem>
      </CNavGroup>
      <CNavItem href="https://coreui.io">
        <CIcon custom-class-name="nav-icon" :icon="cilCloudDownload" /> Download CoreUI
      </CNavItem>
    </CSidebarNav>
    <CSidebarFooter class="border-top">
      <CButton color="primary" size="sm" @click="locked = !locked">
        {{ locked ? 'Unlock collapsing' : 'Lock the active section open' }}
      </CButton>
    </CSidebarFooter>
  </CSidebar>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CNavGroup, CNavItem, CSidebar, CSidebarFooter, CSidebarNav } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSettings, cilSpeedometer } from '@coreui/icons'

const visible = ref(true)
const locked = ref(true)

const handleVisibleChange = (value) => {
  if (!value && locked.value) {
    return
  }

  visible.value = value
}
</script>
