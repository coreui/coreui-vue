<template>
  <CForm class="row row-cols-lg-auto g-3 align-items-center">
    <CCol xs="12">
      <CFormLabel class="visually-hidden" for="inlineFormInputGroupUsername">Username</CFormLabel>
      <CInputGroup>
        <CInputGroupText>@</CInputGroupText>
        <CFormInput id="inlineFormInputGroupUsername" placeholder="Username" />
      </CInputGroup>
    </CCol>
    <CCol xs="12">
      <CFormLabel class="visually-hidden" for="inlineFormSelectPref">Preference</CFormLabel>
      <CFormSelect id="inlineFormSelectPref">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </CCol>
    <CCol xs="12">
      <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me" />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Submit</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/vue'
</script>
