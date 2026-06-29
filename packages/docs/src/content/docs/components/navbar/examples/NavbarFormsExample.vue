<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search" />
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CForm, CFormInput, CButton } from '@coreui/vue'
</script>
