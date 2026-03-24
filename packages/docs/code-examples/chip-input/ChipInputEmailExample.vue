<template>
  <CChipInput
    label="To:"
    placeholder="Add recipients..."
    v-model="recipients"
    separator=";"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const recipients = ref(['user@example.com'])
</script>
