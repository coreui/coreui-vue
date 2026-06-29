<template>
  <CInputGroup class="flex-nowrap">
    <CInputGroupText id="addon-wrapping">@</CInputGroupText>
    <CFormInput placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
