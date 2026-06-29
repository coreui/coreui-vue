<template>
  <CForm
    class="row g-3 needs-validation"
    novalidate
    :validated="validatedTooltip01"
    @submit="handleSubmitTooltip01"
  >
    <CCol md="4" class="position-relative">
      <CFormInput
        id="validationTooltip01"
        feedback-valid="Looks good!"
        label="First name"
        required
        tooltip-feedback
        value="Mark"
      />
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormInput
        id="validationTooltip02"
        feedback-valid="Looks good!"
        label="Last name"
        required
        tooltip-feedback
        value="Otto"
      />
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormLabel for="validationTooltipUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput
          id="validationTooltipUsername"
          aria-describedby="inputGroupPrependFeedback"
          feedback-invalid="Please choose a username."
          required
          tooltip-feedback
        />
      </CInputGroup>
    </CCol>
    <CCol md="6" class="position-relative">
      <CFormInput
        id="validationTooltip03"
        aria-describedby="validationTooltip03Feedback"
        feedback-invalid="Please provide a valid city."
        label="City"
        required
        tooltip-feedback
      />
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormSelect
        id="validationTooltip04"
        aria-describedby="validationTooltip04Feedback"
        feedback-invalid="Please select a valid state."
        label="State"
        required
        tooltip-feedback
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormInput
        id="validationTooltip05"
        aria-describedby="validationTooltip05Feedback"
        feedback-invalid="Please provide a valid zip."
        label="Zip"
        required
        tooltip-feedback
      />
    </CCol>
    <CCol xs="12" class="position-relative">
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
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
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
