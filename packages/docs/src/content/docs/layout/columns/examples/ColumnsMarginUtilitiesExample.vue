<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow>
        <CCol md="4">.col-md-4</CCol>
        <CCol md="4" class="ms-auto">.col-md-4 .ms-auto</CCol>
      </CRow>
      <CRow>
        <CCol md="3" class="ms-md-auto">.col-md-3 .ms-md-auto</CCol>
        <CCol md="3" class="ms-md-auto">.col-md-3 .ms-md-auto</CCol>
      </CRow>
      <CRow>
        <CCol xs="auto" class="me-auto">.col-auto .me-auto</CCol>
        <CCol xs="auto">.col-auto</CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
