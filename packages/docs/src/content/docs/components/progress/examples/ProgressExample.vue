<template>
  <CProgress :value="0" />
  <CProgress :value="25" />
  <CProgress :value="50" />
  <CProgress :value="75" />
  <CProgress :value="100" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
