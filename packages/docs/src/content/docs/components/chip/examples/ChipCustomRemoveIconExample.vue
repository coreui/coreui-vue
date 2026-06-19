<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip removable color="primary">
      <template #removeIcon>
        <CIcon :icon="cilTrash" />
      </template>
      Custom icon
    </CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilTrash } from '@coreui/icons'
</script>
