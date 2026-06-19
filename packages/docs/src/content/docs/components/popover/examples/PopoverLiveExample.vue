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
const customPopoverStyle = {
  '--cui-popover-max-width': '200px',
  '--cui-popover-border-color': 'var(--cui-primary)',
  '--cui-popover-header-bg': 'var(--cui-primary)',
  '--cui-popover-header-color': 'var(--cui-white)',
  '--cui-popover-body-padding-x': '1rem',
  '--cui-popover-body-padding-y': '.5rem',
}
</script>
