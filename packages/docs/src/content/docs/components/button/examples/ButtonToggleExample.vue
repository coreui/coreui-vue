<template>
  <div class="d-flex gap-1 mb-3">
    <CButton toggle>Toggle button</CButton>
    <CButton toggle active>Active toggle button</CButton>
    <CButton toggle disabled>Disabled toggle button</CButton>
  </div>
  <div class="d-flex gap-1">
    <CButton color="primary" toggle>Toggle button</CButton>
    <CButton color="primary" toggle active>Active toggle button</CButton>
    <CButton color="primary" toggle disabled>Disabled toggle button</CButton>
  </div>
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
