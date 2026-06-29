<template>
  <CForm class="row g-3 needs-validation">
    <CCol md="4">
      <CFormInput
        id="validationServer01"
        feedback="Looks good!"
        label="Email"
        required
        valid
        value="name@surname.com"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        id="validationServer02"
        feedback="Looks good!"
        label="Repeat email"
        required
        valid
        value="name@surname.com"
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationServerUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
        <CFormInput
          id="validationServerUsername"
          aria-describedby="inputGroupPrepend03"
          feedback="Please choose a username."
          invalid
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        id="validationServer03"
        feedback="Please provide a valid city."
        invalid
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        id="validationServer04"
        feedback="Please provide a valid city."
        invalid
        label="State"
      >
        <option disabled>Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        id="validationServer05"
        feedback="Please provide a valid zip."
        invalid
        label="zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        id="invalidCheck"
        feedback-invalid="You must agree before submitting."
        invalid
        label="Agree to terms and conditions"
        required
        type="checkbox"
      />
    </CCol>
    <CCol xs="12">
      <CButton color="primary" type="submit">Submit form</CButton>
    </CCol>
  </CForm>
</template>

<script setup>
import {
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/vue'
</script>
