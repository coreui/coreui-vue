<template>
  <CFormFloating>
    <CFormInput
      type="email"
      id="floatingInputValue"
      floatingLabel="Input with value"
      placeholder="name@example.com"
      value="test@example.com"
    />
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormInput } from '@coreui/vue'
</script>
