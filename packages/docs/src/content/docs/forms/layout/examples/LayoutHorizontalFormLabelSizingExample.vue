<template>
  <CRow class="mb-3">
    <CFormLabel for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"
      >Email</CFormLabel
    >
    <CCol sm="10">
      <CFormInput
        id="colFormLabelSm"
        type="email"
        class="form-control form-control-sm"
        placeholder="col-form-label-sm"
      />
    </CCol>
  </CRow>
  <CRow class="mb-3">
    <CFormLabel for="colFormLabel" class="col-sm-2 col-form-label">Email</CFormLabel>
    <CCol sm="10">
      <CFormInput id="colFormLabel" type="email" placeholder="col-form-label" />
    </CCol>
  </CRow>
  <CRow>
    <CFormLabel for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"
      >Email</CFormLabel
    >
    <CCol sm="10">
      <CFormInput
        id="colFormLabelLg"
        type="email"
        class="form-control form-control-lg"
        placeholder="col-form-label-lg"
      />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CFormLabel, CCol, CFormInput } from '@coreui/vue'
</script>
