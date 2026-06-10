<template>
  <CChipSet selectable selection-mode="single" :chips="chips" v-model:selected="selected" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Small', 'Medium', 'Large']
const selected = ref(['Small'])
</script>
