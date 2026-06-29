<template>
  <CFormFloating>
    <CFormInput
      id="floatingInputValue"
      type="email"
      floating-label="Input with value"
      placeholder="name@example.com"
      value="test@example.com"
    />
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormInput } from '@coreui/vue'
</script>
