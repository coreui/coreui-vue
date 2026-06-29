<template>
  <div>
    <CButton color="primary" @click="offcanvasVisible = true">
      Open Sidebar with Focus Trap
    </CButton>

    <COffcanvas placement="start" :visible="offcanvasVisible" @hide="offcanvasVisible = false">
      <COffcanvasHeader>
        <COffcanvasTitle>Navigation Sidebar</COffcanvasTitle>
        <CCloseButton class="text-reset" @click="offcanvasVisible = false" />
      </COffcanvasHeader>
      <COffcanvasBody>
        <p>
          This sidebar includes built-in focus trapping. Tab navigation will stay within this panel
          while it's open.
        </p>

        <div class="mb-3">
          <CFormInput placeholder="Search navigation..." />
        </div>

        <CNav variant="pills" orientation="vertical">
          <CNavItem>
            <CNavLink href="#" active>Dashboard</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Products</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CNav>

        <div class="mt-4">
          <CButton color="primary" size="sm" class="me-2">Quick Action</CButton>
          <CButton color="secondary" variant="outline" size="sm">Help</CButton>
        </div>
      </COffcanvasBody>
    </COffcanvas>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
  CCloseButton,
  CFormInput,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/vue'

const offcanvasVisible = ref(false)
</script>
