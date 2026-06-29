<template>
  <div>
    <CChipInput v-model="tags" :create-on-blur="false" placeholder="Must press Enter" />
    <p class="mt-2 text-muted">
      <small>Blurring won't create a chip - you must press Enter</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(["Blur won't create"])
</script>
