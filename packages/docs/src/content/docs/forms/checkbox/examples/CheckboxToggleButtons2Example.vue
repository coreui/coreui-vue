<template>
  <CFormCheck
    :button="{ color: 'primary' }"
    id="btn-check"
    autocomplete="off"
    label="Single toggle"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
