<template>
  <CChipSet removable v-model:chips="chips" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ref([
  { value: 'filter-one', label: 'Filter one' },
  { value: 'filter-two', label: 'Filter two' },
  { value: 'filter-three', label: 'Filter three', disabled: true },
])
</script>
