<template>
  <CFormInput
    type="text"
    placeholder="Disabled input"
    aria-label="Disabled input example"
    disabled
  />
  <br />
  <CFormInput
    type="text"
    placeholder="Disabled readonly input"
    aria-label="Disabled input example"
    disabled
    readonly
  />
  <br />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
