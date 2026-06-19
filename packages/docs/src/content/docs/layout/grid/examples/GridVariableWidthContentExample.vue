<template>
  <div class="docs-example-row">
    <CContainer>
      <div class="row justify-content-md-center">
        <CCol xs lg="2"> 1 of 3 </CCol>
        <CCol md="auto"> Variable width content </CCol>
        <CCol xs lg="2"> 3 of 3 </CCol>
      </div>
      <CRow>
        <CCol> 1 of 3 </CCol>
        <CCol md="auto"> Variable width content </CCol>
        <CCol xs lg="2"> 3 of 3 </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CCol, CRow } from '@coreui/vue'
</script>
