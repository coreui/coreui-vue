<template>
  <CForm class="row g-3">
    <div class="col-auto">
      <CFormLabel for="staticEmail2" class="visually-hidden">Email</CFormLabel>
      <CFormInput type="text" id="staticEmail2" value="email@example.com" readonly plain-text />
    </div>
    <div class="col-auto">
      <CFormLabel for="inputPassword2" class="visually-hidden">Password</CFormLabel>
      <CFormInput type="password" id="inputPassword2" placeholder="Password" />
    </div>
    <div class="col-auto">
      <CButton type="submit" color="primary" class="mb-3">Confirm identity</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/vue'
</script>
