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
const customPopoverStyle = {
  '--cui-popover-max-width': '200px',
  '--cui-popover-border-color': 'var(--cui-primary)',
  '--cui-popover-header-bg': 'var(--cui-primary)',
  '--cui-popover-header-color': 'var(--cui-white)',
  '--cui-popover-body-padding-x': '1rem',
  '--cui-popover-body-padding-y': '.5rem',
}
</script>
