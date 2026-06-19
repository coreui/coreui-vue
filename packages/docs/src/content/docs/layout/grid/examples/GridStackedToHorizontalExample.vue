<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow>
        <CCol sm="8">col-sm-8</CCol>
        <CCol sm="4">col-sm-4</CCol>
      </CRow>
      <CRow>
        <CCol sm>col-sm</CCol>
        <CCol sm>col-sm</CCol>
        <CCol sm>col-sm</CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
