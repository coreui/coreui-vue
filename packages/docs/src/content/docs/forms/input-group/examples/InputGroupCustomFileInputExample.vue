<template>
  <CInputGroup class="mb-3">
    <CInputGroupText as="label" for="inputGroupFile01">Upload</CInputGroupText>
    <CFormInput id="inputGroupFile01" type="file" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput id="inputGroupFile02" type="file" />
    <CInputGroupText as="label" for="inputGroupFile02">Upload</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton id="inputGroupFileAddon03" type="button" color="secondary" variant="outline"
      >Button</CButton
    >
    <CFormInput
      id="inputGroupFile03"
      type="file"
      aria-describedby="inputGroupFileAddon03"
      aria-label="Upload"
    />
  </CInputGroup>
  <CInputGroup>
    <CFormInput
      id="inputGroupFile04"
      type="file"
      aria-describedby="inputGroupFileAddon04"
      aria-label="Upload"
    />
    <CButton id="inputGroupFileAddon04" type="button" color="secondary" variant="outline"
      >Button</CButton
    >
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/vue'
</script>
