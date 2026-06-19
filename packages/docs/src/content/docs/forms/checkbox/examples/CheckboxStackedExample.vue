<template>
  <CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
