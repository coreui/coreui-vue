<template>
  <CForm class="row gy-2 gx-3 align-items-center">
    <CCol xs="auto">
      <CFormLabel class="visually-hidden" for="autoSizingInput">Name</CFormLabel>
      <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
    </CCol>
    <CCol xs="auto">
      <CFormLabel class="visually-hidden" for="autoSizingInputGroup">Username</CFormLabel>
      <CInputGroup>
        <CInputGroupText>@</CInputGroupText>
        <CFormInput id="autoSizingInputGroup" placeholder="Username" />
      </CInputGroup>
    </CCol>
    <CCol xs="auto">
      <CFormLabel class="visually-hidden" for="autoSizingSelect">Preference</CFormLabel>
      <CFormSelect id="autoSizingSelect">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CCol>
    <CCol xs="auto">
      <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
    </CCol>
    <CCol xs="auto">
      <CButton color="primary" type="submit">Submit</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/vue'
</script>
