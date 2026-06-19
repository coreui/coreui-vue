<template>
  <CForm :validated="true">
    <div class="mb-3">
      <CFormTextarea
        feedbackInvalid="Please enter a message in the textarea."
        id="validationTextarea"
        label="Textarea"
        placeholder="Required example textarea"
        required
      />
    </div>
    <CFormCheck
      class="mb-3"
      id="validationFormCheck1"
      label="Check this checkbox"
      feedbackInvalid="Example invalid feedback text"
      required
    />
    <CFormCheck
      type="radio"
      name="radio-stacked"
      id="validationFormCheck2"
      label="Check this checkbox"
      required
    />
    <CFormCheck
      class="mb-3"
      type="radio"
      name="radio-stacked"
      id="validationFormCheck3"
      label="Or toggle this other radio"
      feedbackInvalid="More example invalid feedback text"
      required
    />
    <div class="mb-3">
      <CFormSelect
        feedbackInvalid="Example invalid select feedback"
        aria-label="select example"
        required
      >
        <option selected="" value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </div>
    <div class="mb-3">
      <CFormInput
        type="file"
        id="validationTextarea"
        feedbackInvalid="Example invalid form file feedback"
        aria-label="file example"
        required
      />
    </div>
    <div class="mb-3">
      <CButton type="submit" color="primary" disabled>Submit form</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormTextarea, CFormCheck, CFormSelect, CFormInput, CButton } from '@coreui/vue'
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
