<template>
  <CFormCheck
    id="btn-check-outlined"
    :button="{ color: 'primary', variant: 'outline' }"
    autocomplete="off"
    label="Single toggle"
  />
  <CFormCheck
    id="btn-check-2-outlined"
    :button="{ color: 'secondary', variant: 'outline' }"
    autocomplete="off"
    label="Checked"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
