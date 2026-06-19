<template>
  <CTooltip content="Disabled tooltip">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton color="primary" disabled>Disabled button</CButton>
      </span>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
const customTooltipStyle = {
  '--cui-tooltip-bg': 'var(--cui-primary)',
}
</script>
