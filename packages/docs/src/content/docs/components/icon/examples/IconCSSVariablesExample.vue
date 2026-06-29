<template>
  <CIcon :icon="icon.cilList" size="xl" :style="{ '--ci-primary-color': 'red' }" />
  <CIcon :icon="icon.cilList" size="xl" :style="{ '--ci-primary-color': 'green' }" />
</template>

<script setup>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
</script>
