<template>
  <CForm class="row g-3">
    <CCol md="6">
      <CFormLabel for="inputEmail4">Email</CFormLabel>
      <CFormInput type="email" id="inputEmail4" />
    </CCol>
    <CCol md="6">
      <CFormLabel for="inputPassword4">Password</CFormLabel>
      <CFormInput type="password" id="inputPassword4" />
    </CCol>
    <CCol xs="12">
      <CFormLabel for="inputAddress">Address</CFormLabel>
      <CFormInput id="inputAddress" placeholder="1234 Main St" />
    </CCol>
    <CCol xs="12">
      <CFormLabel for="inputAddress2">Address 2</CFormLabel>
      <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </CCol>
    <CCol md="6">
      <CFormLabel for="inputCity">City</CFormLabel>
      <CFormInput id="inputCity" />
    </CCol>
    <CCol md="4">
      <CFormLabel for="inputState">State</CFormLabel>
      <CFormSelect id="inputState">
        <option>Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="2">
      <CFormLabel for="inputZip">Zip</CFormLabel>
      <CFormInput id="inputZip" />
    </CCol>
    <CCol xs="12">
      <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Sign in</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import { CForm, CCol, CFormLabel, CFormInput, CFormSelect, CFormCheck, CButton } from '@coreui/vue'
</script>
