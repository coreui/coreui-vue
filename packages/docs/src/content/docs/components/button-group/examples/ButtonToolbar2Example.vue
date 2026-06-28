<template>
  <CButtonToolbar class="mb-3" role="toolbar" aria-label="Toolbar with button groups">
    <CButtonGroup class="me-2" role="group" aria-label="First group">
      <CButton color="secondary" variant="outline">1</CButton>
      <CButton color="secondary" variant="outline">2</CButton>
      <CButton color="secondary" variant="outline">3</CButton>
      <CButton color="secondary" variant="outline">4</CButton>
    </CButtonGroup>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </CInputGroup>
  </CButtonToolbar>
  <CButtonToolbar
    class="justify-content-between"
    role="group"
    aria-label="Toolbar with button groups"
  >
    <CButtonGroup class="me-2" role="group" aria-label="First group">
      <CButton color="secondary" variant="outline">1</CButton>
      <CButton color="secondary" variant="outline">2</CButton>
      <CButton color="secondary" variant="outline">3</CButton>
      <CButton color="secondary" variant="outline">4</CButton>
    </CButtonGroup>
    <CInputGroup>
      <CInputGroupText>@</CInputGroupText>
      <CFormInput
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </CInputGroup>
  </CButtonToolbar>
</template>

<script setup>
import {
  CButtonToolbar,
  CButtonGroup,
  CButton,
  CInputGroup,
  CInputGroupText,
  CFormInput,
} from '@coreui/vue'
</script>
