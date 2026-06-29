<template>
  <CChipInput
    v-model="skills"
    label="Your skills"
    :max-chips="10"
    placeholder="Add your skills..."
    :chip-class-name="'chip-primary'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const skills = ref(['JavaScript', 'Vue.js', 'TypeScript'])
</script>
