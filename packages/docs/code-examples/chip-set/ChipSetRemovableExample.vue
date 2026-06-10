<template>
  <CChipSet removable :chips="chips" @remove="onRemove" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ref([
  { value: 'filter-one', label: 'Filter one' },
  { value: 'filter-two', label: 'Filter two' },
  { value: 'filter-three', label: 'Filter three', disabled: true },
])

const onRemove = (value) => {
  chips.value = chips.value.filter((chip) => chip.value !== value)
}
</script>
