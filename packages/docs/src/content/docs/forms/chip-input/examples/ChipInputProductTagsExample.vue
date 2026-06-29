<template>
  <CChipInput
    v-model="tags"
    label="Product tags"
    placeholder="Add tags..."
    size="sm"
    :chip-class-name="'chip-info'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['electronics', 'gadgets', 'tech'])
</script>
