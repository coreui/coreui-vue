<template>
  <div>
    <CChipInput
      v-model="tags"
      placeholder="Try pasting: apple,banana,cherry"
    />
    <p class="mt-2 text-muted">
      <small>Paste comma-separated values to create multiple chips at once</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref([])
</script>
