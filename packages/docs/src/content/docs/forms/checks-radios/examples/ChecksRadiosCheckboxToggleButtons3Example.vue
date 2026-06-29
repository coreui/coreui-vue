<template>
  <CFormCheck
    id="btn-check-3"
    :button="{ color: 'primary' }"
    autocomplete="off"
    label="Disabled"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
