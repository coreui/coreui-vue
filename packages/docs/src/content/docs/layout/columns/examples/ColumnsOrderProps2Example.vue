<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow>
        <CCol xs="{ span: true, order: 'last' }"> First in DOM, ordered last </CCol>
        <CCol> Second in DOM, unordered </CCol>
        <CCol xs="{ span: true, order: 'first' }"> Third in DOM, ordered first </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
