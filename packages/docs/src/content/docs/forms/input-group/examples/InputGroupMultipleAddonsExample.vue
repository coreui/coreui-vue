<template>
  <CInputGroup class="mb-3">
    <CInputGroupText>$</CInputGroupText>
    <CInputGroupText>0.00</CInputGroupText>
    <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
  </CInputGroup>
  <CInputGroup>
    <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
    <CInputGroupText>$</CInputGroupText>
    <CInputGroupText>0.00</CInputGroupText>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
