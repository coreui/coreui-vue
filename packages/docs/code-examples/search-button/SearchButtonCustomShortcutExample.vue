<template>
  <div>
    <CSearchButton
      aria-label="Open command palette"
      placeholder="Command palette"
      shortcut="meta+k,ctrl+k"
      @trigger="count++"
    />
    <CAlert color="info" class="mt-3 mb-0">
      Triggered {{ count }} {{ count === 1 ? 'time' : 'times' }} with click or shortcut.
    </CAlert>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CAlert, CSearchButton } from '@coreui/vue'

const count = ref(0)
</script>
