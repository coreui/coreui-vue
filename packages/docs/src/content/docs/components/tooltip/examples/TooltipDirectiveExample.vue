<template>
  <CButton
    color="secondary"
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    >Tooltip on top</CButton
  >
  <CButton
    color="secondary"
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    >Tooltip on right</CButton
  >
  <CButton
    color="secondary"
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    >Tooltip on bottom</CButton
  >
  <CButton
    color="secondary"
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    >Tooltip on left</CButton
  >
</template>

<script setup>
import { CButton } from '@coreui/vue'
const customTooltipStyle = {
  '--cui-tooltip-bg': 'var(--cui-primary)',
}
</script>
