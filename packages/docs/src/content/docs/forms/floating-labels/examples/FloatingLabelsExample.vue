<template>
  <CFormInput
    class="mb-3"
    type="email"
    id="floatingInput"
    floatingLabel="Email address"
    placeholder="name@example.com"
  />
  <CFormInput
    type="password"
    id="floatingPassword"
    floatingLabel="Password"
    placeholder="Password"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
