<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow>
        <CCol xs="6" sm="3">.col-6 .col-sm-3</CCol>
        <CCol xs="6" sm="3">.col-6 .col-sm-3</CCol>
        <div class="w-100"></div>
        <CCol xs="6" sm="3">.col-6 .col-sm-3</CCol>
        <CCol xs="6" sm="3">.col-6 .col-sm-3</CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
