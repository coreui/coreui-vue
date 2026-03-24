<template>
  <div>
    <div class="d-flex gap-2 flex-wrap mb-3">
      <CChip
        v-for="(chip, index) in chips"
        :key="index"
        selectable
        :selected="chip.selected"
        @selected-change="(selected) => chip.selected = selected"
        color="primary"
      >
        {{ chip.label }}
      </CChip>
    </div>

    <p class="text-muted small">
      Selected: {{ selectedChips.join(', ') || 'None' }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CChip } from '@coreui/vue'

const chips = ref([
  { label: 'Option 1', selected: false },
  { label: 'Option 2', selected: false },
  { label: 'Option 3', selected: false },
  { label: 'Option 4', selected: false },
])

const selectedChips = computed(() =>
  chips.value.filter(chip => chip.selected).map(chip => chip.label)
)
</script>
