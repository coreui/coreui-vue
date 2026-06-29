<template>
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    color="secondary"
    >Tooltip on top</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    color="secondary"
    >Tooltip on right</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    color="secondary"
    >Tooltip on bottom</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    color="secondary"
    >Tooltip on left</CButton
  >
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
