<template>
  <CRow>
    <CCol :sm="6">
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText
            >With supporting text below as a natural lead-in to additional content.</CCardText
          >
          <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText
            >With supporting text below as a natural lead-in to additional content.</CCardText
          >
          <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
