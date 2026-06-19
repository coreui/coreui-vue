<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow :xs="{ cols: 'auto' }">
        <CCol>Column</CCol>
        <CCol>Column</CCol>
        <CCol>Column</CCol>
        <CCol>Column</CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
