<template>
  <CInputGroup class="mb-3">
    <CInputGroupText as="label" for="inputGroupFile01">Upload</CInputGroupText>
    <CFormInput type="file" id="inputGroupFile01" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput type="file" id="inputGroupFile02" />
    <CInputGroupText as="label" for="inputGroupFile02">Upload</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon03"
      >Button</CButton
    >
    <CFormInput
      type="file"
      id="inputGroupFile03"
      aria-describedby="inputGroupFileAddon03"
      aria-label="Upload"
    />
  </CInputGroup>
  <CInputGroup>
    <CFormInput
      type="file"
      id="inputGroupFile04"
      aria-describedby="inputGroupFileAddon04"
      aria-label="Upload"
    />
    <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon04"
      >Button</CButton
    >
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/vue'
</script>
