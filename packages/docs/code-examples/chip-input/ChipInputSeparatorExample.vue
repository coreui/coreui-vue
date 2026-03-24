<template>
  <div>
    <CChipInput
      separator=";"
      v-model="tags"
      placeholder="Type and use ; to separate..."
    />
    <p class="mt-2 text-muted">
      <small>Use semicolon (;) as separator</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Item 1'])
</script>
