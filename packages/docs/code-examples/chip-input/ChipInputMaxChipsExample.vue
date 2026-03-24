<template>
  <div>
    <CChipInput
      :maxChips="5"
      v-model="tags"
      placeholder="Max 5 chips"
    />
    <p class="mt-2 text-muted">
      <small>{{ tags.length }}/5 chips - {{ 5 - tags.length }} remaining</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['One', 'Two', 'Three'])
</script>
