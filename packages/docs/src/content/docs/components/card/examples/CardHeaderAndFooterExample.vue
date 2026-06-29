<template>
  <CCard class="text-center">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
    <CCardFooter class="text-body-secondary">2 days ago</CCardFooter>
  </CCard>
</template>

<script setup>
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardFooter,
} from '@coreui/vue'
</script>
