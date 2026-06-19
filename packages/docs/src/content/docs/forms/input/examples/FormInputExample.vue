<template>
  <CForm>
    <CFormInput
      type="email"
      id="exampleFormControlInput1"
      label="Email address"
      placeholder="name@example.com"
      text="Must be 8-20 characters long."
      aria-describedby="exampleFormControlInputHelpInline"
    />
  </CForm>
</template>

<script setup>
import { CForm, CFormInput } from '@coreui/vue'
</script>
