<template>
  <CFormCheck
    :button="{ color: 'primary' }"
    id="btn-check-2"
    autocomplete="off"
    label="Checked"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
