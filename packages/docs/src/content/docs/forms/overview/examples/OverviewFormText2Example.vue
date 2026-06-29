<template>
  <CRow class="g-3 align-items-center">
    <CCol xs="auto">
      <CFormLabel for="inputPassword6" class="col-form-label"> Password </CFormLabel>
    </CCol>
    <CCol xs="auto">
      <CFormInput id="inputPassword6" type="password" aria-describedby="passwordHelpInline" />
    </CCol>
    <CCol xs="auto">
      <CFormText id="passwordHelpInline" as="span"> Must be 8-20 characters long. </CFormText>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormLabel, CFormInput, CFormText } from '@coreui/vue'
</script>
