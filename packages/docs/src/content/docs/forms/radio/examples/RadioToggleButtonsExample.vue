<template>
  <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
