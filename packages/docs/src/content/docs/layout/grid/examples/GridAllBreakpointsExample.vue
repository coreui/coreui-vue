<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow>
        <CCol>col</CCol>
        <CCol>col</CCol>
        <CCol>col</CCol>
        <CCol>col</CCol>
      </CRow>
      <CRow>
        <CCol xs="8">col-8</CCol>
        <CCol xs="4">col-4</CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
