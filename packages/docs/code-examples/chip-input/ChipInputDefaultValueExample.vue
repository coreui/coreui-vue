<template>
  <div>
    <CChipInput
      :defaultValue="['HTML', 'CSS', 'JavaScript']"
      placeholder="Add more..."
      @change="handleChange"
    />
    <div class="mt-3 text-body-secondary">
      Last change: {{ lastChange || 'No changes yet' }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const lastChange = ref('')

const handleChange = (values) => {
  lastChange.value = values.join(', ')
}
</script>
