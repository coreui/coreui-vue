<template>
  <CContainer>
    <CNavbar color-scheme="light" class="bg-light">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
      </CContainer>
    </CNavbar>
  </CContainer>
</template>

<script setup>
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
const visibleExternalContent = ref(false)
const visibleOffcanvas = ref(false)
const visibleOffcanvas2 = ref(false)
</script>
