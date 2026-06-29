<template>
  <CTooltip
    content="This top tooltip is themed via CSS variables."
    placement="top"
    :style="customTooltipStyle"
  >
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Custom tooltip</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
const customTooltipStyle = {
  '--cui-tooltip-bg': 'var(--cui-primary)',
}
</script>
