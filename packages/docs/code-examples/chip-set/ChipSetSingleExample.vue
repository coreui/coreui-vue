<template>
  <CChipSet selectable selection-mode="single" v-model:selected="selected">
    <CChip value="small">Small</CChip>
    <CChip value="medium">Medium</CChip>
    <CChip value="large">Large</CChip>
  </CChipSet>
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet, CChip } from '@coreui/vue'

const selected = ref(['small'])
</script>
