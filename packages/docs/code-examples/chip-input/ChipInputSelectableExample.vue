<template>
  <div>
    <CChipInput
      selectable
      v-model="items"
      @select="handleSelect"
      placeholder="Click chips to select them..."
    />

    <p class="mt-3 text-muted small" v-if="selectedItems.length">
      Selected: {{ selectedItems.join(', ') }}
    </p>
    <p class="mt-3 text-muted small" v-else>
      No chips selected
    </p>
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
