<template>
  <CForm>
    <div class="mb-3">
      <CFormLabel for="exampleFormControlInput1">Email address</CFormLabel>
      <CFormInput id="exampleFormControlInput1" type="email" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
      <CFormLabel for="exampleFormControlTextarea1">Example textarea</CFormLabel>
      <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CFormTextarea } from '@coreui/vue'
</script>
