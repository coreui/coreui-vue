<template>
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    color="secondary"
    >Popover on top</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    color="secondary"
    >Popover on right</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    color="secondary"
    >Popover on bottom</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    color="secondary"
    >Popover on left</CButton
  >
</template>

<script setup>
import { CButton } from '@coreui/vue'
</script>
