<template>
  <CRow class="g-3">
    <CCol sm="7">
      <CFormInput placeholder="City" aria-label="City" />
    </CCol>
    <CCol sm>
      <CFormInput placeholder="State" aria-label="State" />
    </CCol>
    <CCol sm>
      <CFormInput placeholder="Zip" aria-label="Zip" />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormInput } from '@coreui/vue'
</script>
