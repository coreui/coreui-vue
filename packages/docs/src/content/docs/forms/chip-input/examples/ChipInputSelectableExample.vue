<template>
  <div>
    <CChipInput
      v-model="items"
      selectable
      placeholder="Click chips to select them..."
      @select="handleSelect"
    />

    <p v-if="selectedItems.length" class="mt-3 text-muted small">
      Selected: {{ selectedItems.join(', ') }}
    </p>
    <p v-else class="mt-3 text-muted small">No chips selected</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const items = ref(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'])
const selectedItems = ref([])

const handleSelect = (selected) => {
  selectedItems.value = selected
}
</script>
