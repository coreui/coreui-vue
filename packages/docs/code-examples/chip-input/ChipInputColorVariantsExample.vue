<template>
  <div>
    <CChipInput
      v-model="colorTags"
      :chipClassName="(value) => `chip-${value}`"
      placeholder="Add color name (primary, secondary, etc.)"
    />
    <p class="mt-2 text-muted">
      <small>Try adding: primary, secondary, success, danger, warning, info</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const colorTags = ref(['primary', 'secondary', 'success', 'danger'])
</script>
