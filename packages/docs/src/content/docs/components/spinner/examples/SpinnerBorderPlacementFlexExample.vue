<template>
  <CButton color="primary" disabled>
    <CSpinner as="span" size="sm" aria-hidden="true" />
  </CButton>
  <CButton color="primary" disabled>
    <CSpinner as="span" size="sm" aria-hidden="true" />
    Loading...
  </CButton>
</template>

<script setup>
import { CButton, CSpinner } from '@coreui/vue'
</script>
