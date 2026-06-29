<template>
  <CForm :validated="true">
    <div class="mb-3">
      <CFormTextarea
        id="validationTextarea"
        feedback-invalid="Please enter a message in the textarea."
        label="Textarea"
        placeholder="Required example textarea"
        required
      />
    </div>
    <CFormCheck
      id="validationFormCheck1"
      class="mb-3"
      label="Check this checkbox"
      feedback-invalid="Example invalid feedback text"
      required
    />
    <CFormCheck
      id="validationFormCheck2"
      type="radio"
      name="radio-stacked"
      label="Check this checkbox"
      required
    />
    <CFormCheck
      id="validationFormCheck3"
      class="mb-3"
      type="radio"
      name="radio-stacked"
      label="Or toggle this other radio"
      feedback-invalid="More example invalid feedback text"
      required
    />
    <div class="mb-3">
      <CFormSelect
        feedback-invalid="Example invalid select feedback"
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
        id="validationTextarea"
        type="file"
        feedback-invalid="Example invalid form file feedback"
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
</script>
