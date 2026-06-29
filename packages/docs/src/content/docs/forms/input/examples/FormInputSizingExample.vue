<template>
  <CFormInput
    type="text"
    class="mb-3"
    size="lg"
    placeholder="Large input"
    aria-label="lg input example"
  />
  <CFormInput
    type="text"
    class="mb-3"
    placeholder="Default input"
    aria-label="default input example"
  />
  <CFormInput
    type="text"
    class="mb-3"
    size="sm"
    placeholder="Small input"
    aria-label="sm input example"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
