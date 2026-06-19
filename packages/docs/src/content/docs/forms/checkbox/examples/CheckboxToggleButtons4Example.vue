<template>
  <CFormCheck
    :button="{ color: 'primary' }"
    id="btn-check-3"
    autocomplete="off"
    label="Disabled"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
