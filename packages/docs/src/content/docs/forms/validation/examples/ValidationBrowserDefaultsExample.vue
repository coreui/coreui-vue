<template>
  <CForm class="row g-3">
    <CCol md="4">
      <CFormInput
        feedbackValid="Looks good!"
        id="validationDefault01"
        label="First name"
        required
        value="Mark"
      />
    </CCol>
    <CCol md="4">
      <CFormInput
        feedbackValid="Looks good!"
        id="validationDefault02"
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
          feedbackInvalid="Please choose a username."
          required
        />
      </CInputGroup>
    </CCol>
    <CCol md="6">
      <CFormInput
        feedbackInvalid="Please provide a valid city."
        id="validationDefault03"
        label="City"
        required
      />
    </CCol>
    <CCol md="3">
      <CFormSelect
        aria-describedby="validationDefault04Feedback"
        feedbackInvalid="Please select a valid state."
        id="validationDefault04"
        label="State"
        required
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3">
      <CFormInput
        feedbackInvalid="Please provide a valid zip."
        id="validationDefault05"
        label="Zip"
        required
      />
    </CCol>
    <CCol xs="12">
      <CFormCheck
        feedbackInvalid="You must agree before submitting."
        id="invalidCheck"
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
