<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
  <br />
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand class="mb-0 h1">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
const visibleExternalContent = ref(false)
const visibleOffcanvas = ref(false)
const visibleOffcanvas2 = ref(false)
</script>
