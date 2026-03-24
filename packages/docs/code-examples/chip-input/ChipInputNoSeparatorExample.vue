<template>
  <div>
    <CChipInput
      :separator="null"
      v-model="tags"
      placeholder="Type and press Enter..."
    />
    <p class="mt-2 text-muted">
      <small>Separator disabled - use Enter key to create chips</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Press Enter'])
</script>
