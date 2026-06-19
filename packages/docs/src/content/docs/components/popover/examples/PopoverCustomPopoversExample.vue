<template>
  <CPopover
    content="This popover is themed via CSS variables."
    placement="right"
    title="Custom popover"
    :style="customPopoverStyle"
  >
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Custom popover</CButton>
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
