<template>
  <CFormCheck
    :button="{ color: 'success', variant: 'outline' }"
    type="radio"
    name="options-outlined"
    id="success-outlined"
    autocomplete="off"
    label="Radio"
    checked
  />
  <CFormCheck
    :button="{ color: 'danger', variant: 'outline' }"
    type="radio"
    name="options-outlined"
    id="danger-outlined"
    autocomplete="off"
    label="Radio"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
