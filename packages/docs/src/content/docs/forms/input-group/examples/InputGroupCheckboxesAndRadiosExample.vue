<template>
  <CInputGroup class="mb-3">
    <CInputGroupText>
      <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input" />
    </CInputGroupText>
    <CFormInput aria-label="Text input with checkbox" />
  </CInputGroup>
  <CInputGroup>
    <CInputGroupText>
      <CFormCheck type="radio" value="" aria-label="Radio button for following text input" />
    </CInputGroupText>
    <CFormInput aria-label="Text input with radio button" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormCheck, CFormInput } from '@coreui/vue'
</script>
