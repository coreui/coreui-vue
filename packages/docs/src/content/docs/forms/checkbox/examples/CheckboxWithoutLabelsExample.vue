<template>
  <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
