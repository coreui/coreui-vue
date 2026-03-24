<template>
  <CChipInput
    v-model="tags"
    placeholder="Type and press Enter..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Vue.js', 'TypeScript', 'CoreUI'])
</script>
