<template>
  <CChipInput
    id="skills-input"
    label="Skills"
    v-model="skills"
    placeholder="Add skill..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const skills = ref(['Problem Solving', 'Teamwork', 'Communication'])
</script>
