<template>
  <CForm class="row g-3 needs-validation">
    <CCol md="4">
      <CFormInput
        feedback="Looks good!"
        id="validationServer01"
        label="Email"
        required
        valid
        value="name@surname.com"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        feedback="Looks good!"
        id="validationServer02"
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
          aria-describedby="inputGroupPrepend03"
          feedback="Please choose a username."
          id="validationServerUsername"
          invalid
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        feedback="Please provide a valid city."
        id="validationServer03"
        invalid
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        feedback="Please provide a valid city."
        id="validationServer04"
        invalid
        label="State"
      >
        <option disabled>Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        feedback="Please provide a valid zip."
        id="validationServer05"
        invalid
        label="zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        feedbackInvalid="You must agree before submitting."
        id="invalidCheck"
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
import { ref } from 'vue'
const validatedCustom01 = ref()
const handleSubmitCustom01 = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  validatedCustom01.value = true
}
const validatedTooltip01 = ref()
const handleSubmitTooltip01 = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }

  validatedTooltip01.value = true
}
</script>
