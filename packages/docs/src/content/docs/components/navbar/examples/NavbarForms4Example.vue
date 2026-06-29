<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CForm class="container-fluid justify-content-start">
      <CButton type="button" color="success" variant="outline" class="me-2">Main button</CButton>
      <CButton type="button" color="secondary" variant="outline" size="sm">Smaller button</CButton>
    </CForm>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CForm, CButton } from '@coreui/vue'
</script>
