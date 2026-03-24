<template>
  <div>
    <CChipInput v-model="tags" placeholder="Type and press Enter..." />
    <div class="mt-3 text-body-secondary">
      Current values: {{ tags.join(', ') || '(empty)' }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Vue', 'React', 'Angular'])
</script>
