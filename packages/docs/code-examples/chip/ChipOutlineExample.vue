<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip variant="outline">Default</CChip>
    <CChip variant="outline" color="primary">Primary</CChip>
    <CChip variant="outline" color="secondary">Secondary</CChip>
    <CChip variant="outline" color="success">Success</CChip>
    <CChip variant="outline" color="danger">Danger</CChip>
    <CChip variant="outline" color="warning">Warning</CChip>
    <CChip variant="outline" color="info">Info</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
