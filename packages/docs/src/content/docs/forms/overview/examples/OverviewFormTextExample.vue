<template>
  <CForm>
    <div class="mb-3">
      <CFormLabel for="inputPassword5">Password</CFormLabel>
      <CFormInput type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
      <CFormText id="passwordHelpBlock">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
      </CFormText>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CFormText } from '@coreui/vue'
</script>
