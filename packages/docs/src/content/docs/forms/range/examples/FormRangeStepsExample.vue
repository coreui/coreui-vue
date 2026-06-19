<template>
  <CFormRange label="Example range" :min="0" :max="5" :step="0.5" :value="3" id="customRange3" />
</template>

<script setup>
import { CFormRange } from '@coreui/vue'
</script>
