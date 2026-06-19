<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
        <CNavbarNav class="me-auto mb-2 mb-lg-0">
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
const visibleExternalContent = ref(false)
const visibleOffcanvas = ref(false)
const visibleOffcanvas2 = ref(false)
</script>
