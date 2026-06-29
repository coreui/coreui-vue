<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav as="nav">
          <CNavLink href="#" active> Home </CNavLink>
          <CNavLink href="#">Features</CNavLink>
          <CNavLink href="#">Pricing</CNavLink>
          <CNavLink href="#" disabled>Disabled</CNavLink>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavLink,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
