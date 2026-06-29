<template>
  <CFormInput
    id="floatingInputInvalid"
    class="mb-3"
    type="email"
    floating-label="Email addresss"
    placeholder="name@example.com"
    valid
    value="test@example.com"
  />
  <CFormInput
    id="floatingInputInvalid"
    type="email"
    invalid
    floating-label="Email addresss"
    placeholder="name@example.com"
    value="test@example.com"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
