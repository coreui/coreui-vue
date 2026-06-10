<template>
  <CChipSet filter :chips="chips" v-model:selected="selected" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipSet } from '@coreui/vue'

const chips = ['Design', 'Development', 'Marketing', 'Sales']
const selected = ref(['Development', 'Sales'])
</script>
