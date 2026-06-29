<template>
  <div class="docs-example-row docs-example-row-flex-cols">
    <CContainer>
      <CRow class="align-items-start">
        <CCol> One of three columns </CCol>
        <CCol> One of three columns </CCol>
        <CCol> One of three columns </CCol>
      </CRow>
      <CRow class="align-items-center">
        <CCol> One of three columns </CCol>
        <CCol> One of three columns </CCol>
        <CCol> One of three columns </CCol>
      </CRow>
      <CRow class="align-items-end">
        <CCol> One of three columns </CCol>
        <CCol> One of three columns </CCol>
        <CCol> One of three columns </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
