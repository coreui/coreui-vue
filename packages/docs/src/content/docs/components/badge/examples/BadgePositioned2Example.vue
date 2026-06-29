<template>
  <CButton color="primary" class="position-relative">
    Profile
    <CBadge
      class="border border-light p-2"
      color="danger"
      position="top-end"
      shape="rounded-circle"
    >
      <span class="visually-hidden">New alerts</span>
    </CBadge>
  </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
