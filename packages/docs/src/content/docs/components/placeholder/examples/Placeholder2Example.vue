<template>
  <p aria-hidden="true">
    <CPlaceholder :xs="6" />
  </p>
  <CButton
    v-c-placeholder="{ xs: 4 }"
    color="primary"
    aria-hidden="true"
    disabled
    href="#"
    tabindex="-1"
  ></CButton>
</template>

<script setup>
import { CPlaceholder, CButton } from '@coreui/vue'
</script>
