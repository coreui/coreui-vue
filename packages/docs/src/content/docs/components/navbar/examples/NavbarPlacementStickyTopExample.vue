<template>
  <CNavbar color-scheme="light" class="bg-light" placement="sticky-top">
    <CContainer fluid>
      <CNavbarBrand href="#">Sticky top</CNavbarBrand>
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
