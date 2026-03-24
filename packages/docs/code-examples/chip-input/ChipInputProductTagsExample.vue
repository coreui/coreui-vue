<template>
  <CChipInput
    label="Product tags"
    v-model="tags"
    placeholder="Add tags..."
    size="sm"
    :chipClassName="'chip-info'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['electronics', 'gadgets', 'tech'])
</script>
