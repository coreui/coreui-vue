<template>
  <CChipSet selectable :chips="chips" v-model:selected="selected" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
]

const selected = ref(['vue'])
</script>
