<template>
  <CChipSet v-model:selected="selected" selectable selection-mode="single" :chips="chips" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Small', 'Medium', 'Large']
const selected = ref(['Small'])
</script>
