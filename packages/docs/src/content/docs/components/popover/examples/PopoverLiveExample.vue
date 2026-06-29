<template>
  <CPopover
    title="Popover title"
    content="And here\’s some amazing content. It’s very engaging. Right?"
    placement="right"
  >
    <template #toggler="{ id, on }">
      <CButton color="danger" size="lg" :aria-describedby="id" v-on="on"
        >Click to toggle popover</CButton
      >
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
