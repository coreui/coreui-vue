<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarText>Navbar text with an inline element</CNavbarText>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarText } from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
const visibleExternalContent = ref(false)
const visibleOffcanvas = ref(false)
const visibleOffcanvas2 = ref(false)
</script>
