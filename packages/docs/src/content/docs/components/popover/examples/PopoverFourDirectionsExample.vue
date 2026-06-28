<template>
  <CButton
    color="danger"
    size="lg"
    v-c-popover="{
      header: 'Popover title',
      content: 'And here\’s some amazing content. It’s very engaging. Right?',
      placement: 'right',
    }"
    >Click to toggle popover</CButton
  >
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
