<template>
  <CFormCheck id="defaultCheck1" label="Default checkbox" />
  <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
