<template>
  <CInputGroup class="mb-3">
    <CInputGroupText id="basic-addon1">@</CInputGroupText>
    <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
  </CInputGroup>
  <CFormLabel for="basic-url">Your vanity URL</CFormLabel>
  <CInputGroup class="mb-3">
    <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
    <CFormInput id="basic-url" aria-describedby="basic-addon3" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CInputGroupText>$</CInputGroupText>
    <CFormInput aria-label="Amount (to the nearest dollar)" />
    <CInputGroupText>.00</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput placeholder="Username" aria-label="Username" />
    <CInputGroupText>@</CInputGroupText>
    <CFormInput placeholder="Server" aria-label="Server" />
  </CInputGroup>
  <CInputGroup>
    <CInputGroupText>With textarea</CInputGroupText>
    <CFormTextarea aria-label="With textarea"></CFormTextarea>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput, CFormLabel, CFormTextarea } from '@coreui/vue'
</script>
