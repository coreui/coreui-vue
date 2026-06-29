<template>
  <CInputGroup class="mb-3">
    <CButton id="button-addon1" type="button" color="secondary" variant="outline">Button</CButton>
    <CFormInput
      placeholder=""
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <CButton id="button-addon2" type="button" color="secondary" variant="outline">Button</CButton>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CFormInput placeholder="" aria-label="Example text with two button addons" />
  </CInputGroup>
  <CInputGroup>
    <CFormInput
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
    />
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CButton, CFormInput } from '@coreui/vue'
</script>
