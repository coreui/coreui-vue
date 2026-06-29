<template>
  <CIcon :icon="icon.cilList" size="xl" />
  <CIcon :icon="icon.cilList" class="text-primary" size="xl" />
  <CIcon :icon="icon.cilList" class="text-secondary" size="xl" />
  <CIcon :icon="icon.cilList" class="text-success" size="xl" />
  <CIcon :icon="icon.cilList" class="text-danger" size="xl" />
  <CIcon :icon="icon.cilList" class="text-warning" size="xl" />
  <CIcon :icon="icon.cilList" class="text-info" size="xl" />
</template>

<script setup>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
</script>
