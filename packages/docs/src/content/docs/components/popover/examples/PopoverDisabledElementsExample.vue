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
</script>
