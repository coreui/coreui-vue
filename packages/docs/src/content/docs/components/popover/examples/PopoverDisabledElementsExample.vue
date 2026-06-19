<template>
  <CButton
    color="secondary"
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    >Popover on top</CButton
  >
  <CButton
    color="secondary"
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    >Popover on right</CButton
  >
  <CButton
    color="secondary"
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    >Popover on bottom</CButton
  >
  <CButton
    color="secondary"
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    >Popover on left</CButton
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
