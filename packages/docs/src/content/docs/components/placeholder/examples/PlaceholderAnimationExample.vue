<template>
  <CPlaceholder as="p" animation="glow">
    <CPlaceholder :xs="12" />
  </CPlaceholder>
  <CPlaceholder as="p" animation="wave">
    <CPlaceholder :xs="12" />
  </CPlaceholder>
</template>

<script setup>
import { CPlaceholder } from '@coreui/vue'
</script>
