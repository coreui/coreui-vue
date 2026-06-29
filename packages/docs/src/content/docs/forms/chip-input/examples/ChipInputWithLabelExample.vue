<template>
  <CChipInput id="skills-input" v-model="skills" label="Skills" placeholder="Add skill..." />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const skills = ref(['Problem Solving', 'Teamwork', 'Communication'])
</script>
