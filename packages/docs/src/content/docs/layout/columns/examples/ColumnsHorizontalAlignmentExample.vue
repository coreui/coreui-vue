<template>
  <div class="docs-example-row">
    <CContainer>
      <CRow class="justify-content-start">
        <CCol xs="4"> One of two columns </CCol>
        <CCol xs="4"> One of two columns </CCol>
      </CRow>
      <CRow class="justify-content-center">
        <CCol xs="4"> One of two columns </CCol>
        <CCol xs="4"> One of two columns </CCol>
      </CRow>
      <CRow class="justify-content-end">
        <CCol xs="4"> One of two columns </CCol>
        <CCol xs="4"> One of two columns </CCol>
      </CRow>
      <CRow class="justify-content-around">
        <CCol xs="4"> One of two columns </CCol>
        <CCol xs="4"> One of two columns </CCol>
      </CRow>
      <CRow class="justify-content-between">
        <CCol xs="4"> One of two columns </CCol>
        <CCol xs="4"> One of two columns </CCol>
      </CRow>
      <CRow class="justify-content-evenly">
        <CCol xs="4"> One of two columns </CCol>
        <CCol xs="4"> One of two columns </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
