<template>
  <CProgress color="success" :value="25" />
  <CProgress color="info" :value="50" />
  <CProgress color="warning" :value="75" />
  <CProgress color="danger" :value="100" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
