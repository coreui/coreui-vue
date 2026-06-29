<template>
  <CProgressStacked>
    <CProgress :value="15" />
    <CProgress color="success" :value="30" />
    <CProgress color="info" :value="20" />
  </CProgressStacked>
</template>

<script setup>
import { CProgressStacked, CProgress } from '@coreui/vue'
</script>
