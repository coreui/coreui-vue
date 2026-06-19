<template>
  <CForm
    class="row g-3 needs-validation"
    novalidate
    :validated="validatedTooltip01"
    @submit="handleSubmitTooltip01"
  >
    <CCol md="4" class="position-relative">
      <CFormInput
        feedbackValid="Looks good!"
        id="validationTooltip01"
        label="First name"
        required
        tooltipFeedback
        value="Mark"
      />
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormInput
        feedbackValid="Looks good!"
        id="validationTooltip02"
        label="Last name"
        required
        tooltipFeedback
        value="Otto"
      />
    </CCol>
    <CCol md="4" class="position-relative">
      <CFormLabel for="validationTooltipUsername">Username</CFormLabel>
      <CInputGroup class="has-validation">
        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
        <CFormInput
          aria-describedby="inputGroupPrependFeedback"
          feedbackInvalid="Please choose a username."
          id="validationTooltipUsername"
          required
          tooltipFeedback
        />
      </CInputGroup>
    </CCol>
    <CCol md="6" class="position-relative">
      <CFormInput
        aria-describedby="validationTooltip03Feedback"
        feedbackInvalid="Please provide a valid city."
        id="validationTooltip03"
        label="City"
        required
        tooltipFeedback
      />
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormSelect
        aria-describedby="validationTooltip04Feedback"
        feedbackInvalid="Please select a valid state."
        id="validationTooltip04"
        label="State"
        required
        tooltipFeedback
      >
        <option selected="" disabled="" value="">Choose...</option>
        <option>...</option>
      </CFormSelect>
    </CCol>
    <CCol md="3" class="position-relative">
      <CFormInput
        aria-describedby="validationTooltip05Feedback"
        feedbackInvalid="Please provide a valid zip."
        id="validationTooltip05"
        label="Zip"
        required
        tooltipFeedback
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
