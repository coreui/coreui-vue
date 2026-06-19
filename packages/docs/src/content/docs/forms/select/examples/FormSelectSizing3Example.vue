<template>
  <CFormSelect :html-size="3" multiple aria-label="size 3 select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
