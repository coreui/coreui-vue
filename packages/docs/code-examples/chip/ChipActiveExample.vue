<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip color="primary">Inactive</CChip>
    <CChip color="primary" active>Active</CChip>
    <CChip variant="outline" color="primary">Inactive Outline</CChip>
    <CChip variant="outline" color="primary" active>Active Outline</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
