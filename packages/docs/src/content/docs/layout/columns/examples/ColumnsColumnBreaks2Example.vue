<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow>
        <CCol xs="6" sm="4">.col-6 .col-sm-4</CCol>
        <CCol xs="6" sm="4">.col-6 .col-sm-4</CCol>
        <div class="w-100 d-none d-md-block"></div>
        <CCol xs="6" sm="4">.col-6 .col-sm-4</CCol>
        <CCol xs="6" sm="4">.col-6 .col-sm-4</CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
