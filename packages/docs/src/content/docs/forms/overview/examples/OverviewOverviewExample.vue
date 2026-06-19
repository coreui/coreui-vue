<template>
  <CForm>
    <div class="mb-3">
      <CFormLabel for="exampleInputEmail1">Email address</CFormLabel>
      <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
    </div>
    <div class="mb-3">
      <CFormLabel for="exampleInputPassword1">Email Password</CFormLabel>
      <CFormInput type="password" id="exampleInputPassword1" />
    </div>
    <CFormCheck class="mb-3" label="Check me out" />
    <CButton type="submit" color="primary"> Submit </CButton>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CFormText, CFormCheck, CButton } from '@coreui/vue'
</script>
