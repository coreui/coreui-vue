<template>
  <CFormInput
    class="mb-3"
    type="email"
    id="floatingInputInvalid"
    floatingLabel="Email addresss"
    placeholder="name@example.com"
    valid
    value="test@example.com"
  />
  <CFormInput
    type="email"
    id="floatingInputInvalid"
    invalid
    floatingLabel="Email addresss"
    placeholder="name@example.com"
    value="test@example.com"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
