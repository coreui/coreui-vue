<template>
  <CFormInput
    id="floatingInput"
    class="mb-3"
    type="email"
    floating-label="Email address"
    placeholder="name@example.com"
  />
  <CFormInput
    id="floatingPassword"
    type="password"
    floating-label="Password"
    placeholder="Password"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
