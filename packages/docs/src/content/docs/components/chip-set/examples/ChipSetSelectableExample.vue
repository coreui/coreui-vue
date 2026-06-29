<template>
  <CChipSet v-model:selected="selected" selectable :chips="chips" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Design', 'Development', 'Marketing', 'Sales']
const selected = ref(['Development', 'Sales'])
</script>
