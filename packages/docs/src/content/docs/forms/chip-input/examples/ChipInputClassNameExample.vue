<template>
  <CChipInput v-model="tags" chip-class-name="chip-info" placeholder="Add tagged items..." />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Tagged', 'Items'])
</script>
