<template>
  <CForm>
    <CRow class="mb-3">
      <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label">Email</CFormLabel>
      <CCol sm="10">
        <CFormInput type="email" id="inputEmail3" />
      </CCol>
    </CRow>
    <CRow class="mb-3">
      <CFormLabel for="inputPassword3" class="col-sm-2 col-form-label">Password</CFormLabel>
      <CCol sm="10">
        <CFormInput type="password" id="inputPassword3" />
      </CCol>
    </CRow>
    <fieldset class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <CCol sm="10">
        <CFormCheck
          type="radio"
          name="gridRadios"
          id="gridRadios1"
          value="option1"
          label="First radio"
          checked
        />
        <CFormCheck
          type="radio"
          name="gridRadios"
          id="gridRadios2"
          value="option2"
          label="Second radio"
        />
        <CFormCheck
          type="radio"
          name="gridRadios"
          id="gridRadios3"
          value="option3"
          label="Third disabled radio"
          disabled
        />
      </CCol>
    </fieldset>
    <CRow class="mb-3">
      <div class="col-sm-10 offset-sm-2">
        <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
      </div>
    </CRow>
    <CButton color="primary" type="submit">Sign in</CButton>
  </CForm>
</template>

<script setup>
import { CForm, CRow, CFormLabel, CCol, CFormInput, CFormCheck, CButton } from '@coreui/vue'
</script>
