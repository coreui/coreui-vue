<template>
  <CFormCheck
    :button="{ color: 'primary', variant: 'outline' }"
    id="btn-check-outlined"
    autocomplete="off"
    label="Single toggle"
  />
  <CFormCheck
    :button="{ color: 'secondary', variant: 'outline' }"
    id="btn-check-2-outlined"
    autocomplete="off"
    label="Checked"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
</script>
