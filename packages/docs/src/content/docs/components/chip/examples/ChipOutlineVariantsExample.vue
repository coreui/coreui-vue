<template>
  <div class="d-flex flex-wrap gap-1">
    <template v-for="color in colors" :key="color">
      <CChip variant="outline" :color="color" clickable>{{ label(color) }} chip</CChip>
      <CChip variant="outline" :color="color" active>{{ label(color) }} chip</CChip>
    </template>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
const label = (color) => color.charAt(0).toUpperCase() + color.slice(1)
</script>
