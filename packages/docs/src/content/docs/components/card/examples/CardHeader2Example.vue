<template>
  <CCard>
    <CCardHeader as="h5">Header</CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
