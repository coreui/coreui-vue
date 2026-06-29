<template>
  <CInputGroup size="sm" class="mb-3">
    <CInputGroupText id="inputGroup-sizing-sm">Small</CInputGroupText>
    <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CInputGroupText id="inputGroup-sizing-default">Default</CInputGroupText>
    <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  </CInputGroup>
  <CInputGroup size="lg">
    <CInputGroupText id="inputGroup-sizing-lg">Large</CInputGroupText>
    <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
