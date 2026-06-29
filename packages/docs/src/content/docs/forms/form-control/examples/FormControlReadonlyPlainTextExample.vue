<template>
  <CRow class="mb-3">
    <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">Email</CFormLabel>
    <div class="col-sm-10">
      <CFormInput id="staticEmail" type="text" value="email@example.com" readonly plain-text />
    </div>
  </CRow>
  <CRow class="mb-3">
    <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">Password</CFormLabel>
    <div class="col-sm-10">
      <CFormInput id="inputPassword" type="password" />
    </div>
  </CRow>
</template>

<script setup>
import { CRow, CFormLabel, CFormInput } from '@coreui/vue'
</script>
