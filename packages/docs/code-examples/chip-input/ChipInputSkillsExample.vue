<template>
  <CChipInput
    label="Your skills"
    v-model="skills"
    :maxChips="10"
    placeholder="Add your skills..."
    :chipClassName="'chip-primary'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const skills = ref(['JavaScript', 'Vue.js', 'TypeScript'])
</script>
