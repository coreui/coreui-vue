<template>
  <CProgress :value="10" color="success">
    <CProgressBar class="overflow-visible text-dark px-2"
      >Long label text for the progress bar, set to a dark color</CProgressBar
    >
  </CProgress>
</template>

<script setup>
import { CProgress, CProgressBar } from '@coreui/vue'
</script>
