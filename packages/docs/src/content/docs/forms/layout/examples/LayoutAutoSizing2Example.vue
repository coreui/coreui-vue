<template>
  <CForm class="row gx-3 gy-2 align-items-center">
    <CCol sm="3">
      <CFormLabel class="visually-hidden" for="specificSizeInputName">Name</CFormLabel>
      <CFormInput id="specificSizeInputName" placeholder="Jane Doe" />
    </CCol>
    <CCol sm="3">
      <CFormLabel class="visually-hidden" for="specificSizeInputGroupUsername">Username</CFormLabel>
      <CInputGroup>
        <CInputGroupText>@</CInputGroupText>
        <CFormInput id="specificSizeInputGroupUsername" placeholder="Username" />
      </CInputGroup>
    </CCol>
    <CCol sm="3">
      <CFormLabel class="visually-hidden" for="specificSizeSelect">Preference</CFormLabel>
      <CFormSelect id="specificSizeSelect">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CCol>
    <CCol xs="auto">
      <CFormCheck id="autoSizingCheck2" type="checkbox" label="Remember me" />
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
