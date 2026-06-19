<template>
  <CRow>
    <CCol xs>
      <CFormInput placeholder="First name" aria-label="First name" />
    </CCol>
    <CCol xs>
      <CFormInput placeholder="Last name" aria-label="Last name" />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormInput } from '@coreui/vue'
</script>
