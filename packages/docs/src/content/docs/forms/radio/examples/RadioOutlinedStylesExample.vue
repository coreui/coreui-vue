<template>
  <CFormCheck
    id="success-outlined"
    :button="{ color: 'success', variant: 'outline' }"
    type="radio"
    name="options-outlined"
    autocomplete="off"
    label="Radio"
    checked
  />
  <CFormCheck
    id="danger-outlined"
    :button="{ color: 'danger', variant: 'outline' }"
    type="radio"
    name="options-outlined"
    autocomplete="off"
    label="Radio"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
