<template>
  <CButton
    v-c-popover="{
      header: 'Popover title',
      content: 'And here\’s some amazing content. It’s very engaging. Right?',
      placement: 'right',
    }"
    color="danger"
    size="lg"
    >Click to toggle popover</CButton
  >
</template>

<script setup>
import { CButton, vcpopover as vCPopover } from '@coreui/vue'
</script>
