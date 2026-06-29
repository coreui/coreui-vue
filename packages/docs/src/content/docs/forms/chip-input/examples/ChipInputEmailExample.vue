<template>
  <CChipInput v-model="recipients" label="To:" placeholder="Add recipients..." separator=";" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const recipients = ref(['user@example.com'])
</script>
