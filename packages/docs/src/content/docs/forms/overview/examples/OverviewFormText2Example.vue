<template>
  <CRow class="g-3 align-items-center">
    <CCol xs="auto">
      <CFormLabel for="inputPassword6" class="col-form-label"> Password </CFormLabel>
    </CCol>
    <CCol xs="auto">
      <CFormInput type="password" id="inputPassword6" aria-describedby="passwordHelpInline" />
    </CCol>
    <CCol xs="auto">
      <CFormText as="span" id="passwordHelpInline"> Must be 8-20 characters long. </CFormText>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormLabel, CFormInput, CFormText } from '@coreui/vue'
</script>
