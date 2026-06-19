<template>
  <CPopover content="Disabled popover" placement="right" :trigger="['hover', 'focus']">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton color="primary" disabled>Disabled button</CButton>
      </span>
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
