<template>
  <div class="d-flex gap-1 mb-3">
    <CButton as="a" href="#" role="button" toggle>Toggle link</CButton>
    <CButton as="a" href="#" role="button" toggle active>Active toggle link</CButton>
    <CButton as="a" role="button" toggle disabled>Disabled toggle link</CButton>
  </div>
  <div class="d-flex gap-1">
    <CButton color="primary" as="a" href="#" role="button" toggle>Toggle link</CButton>
    <CButton color="primary" as="a" href="#" role="button" toggle active
      >Active toggle link</CButton
    >
    <CButton color="primary" as="a" role="button" toggle disabled>Disabled toggle link</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
