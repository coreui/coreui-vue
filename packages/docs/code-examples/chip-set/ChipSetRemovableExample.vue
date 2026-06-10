<template>
  <CChipSet removable @remove="onRemove">
    <CChip v-for="chip in chips" :key="chip.value" :value="chip.value" :disabled="chip.disabled">
      {{ chip.label }}
    </CChip>
  </CChipSet>
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet, CChip } from '@coreui/vue'

const chips = ref([
  { value: 'filter-one', label: 'Filter one' },
  { value: 'filter-two', label: 'Filter two' },
  { value: 'filter-three', label: 'Filter three', disabled: true },
])

const onRemove = (value) => {
  chips.value = chips.value.filter((chip) => chip.value !== value)
}
</script>
