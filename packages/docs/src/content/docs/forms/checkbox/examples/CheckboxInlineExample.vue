<template>
  <CFormCheck label="Disabled checkbox" disabled />
  <CFormCheck label="Disabled checked checkbox" checked disabled />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
