<template>
  <CChipSet selectable v-model:selected="selected">
    <CChip value="design">Design</CChip>
    <CChip value="development">Development</CChip>
    <CChip value="marketing">Marketing</CChip>
    <CChip value="sales">Sales</CChip>
  </CChipSet>
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet, CChip } from '@coreui/vue'

const selected = ref(['development', 'sales'])
</script>
