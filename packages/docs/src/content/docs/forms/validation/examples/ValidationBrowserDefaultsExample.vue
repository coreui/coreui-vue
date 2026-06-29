<template>
  <CForm class="row g-3">
    <CCol md="4">
      <CFormInput
        id="validationDefault01"
        feedback-valid="Looks good!"
        label="First name"
        required
        value="Mark"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        id="validationDefault02"
        feedback-valid="Looks good!"
        label="Email"
        value="Otto"
        required
      />
    </CCol>
    <CCol md="4">
      <CFormLabel for="validationDefaultUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend"
          feedback-invalid="Please choose a username."
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        id="validationDefault03"
        feedback-invalid="Please provide a valid city."
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        id="validationDefault04"
        aria-describedby="validationDefault04Feedback"
        feedback-invalid="Please select a valid state."
        label="State"
        required
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        id="validationDefault05"
        feedback-invalid="Please provide a valid zip."
        label="Zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        id="invalidCheck"
        feedback-invalid="You must agree before submitting."
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
