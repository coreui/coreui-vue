<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip disabled>Disabled</CChip>
    <CChip disabled color="primary">Disabled Primary</CChip>
    <CChip disabled selectable color="success">Disabled Selectable</CChip>
    <CChip disabled removable color="danger">Disabled Removable</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
