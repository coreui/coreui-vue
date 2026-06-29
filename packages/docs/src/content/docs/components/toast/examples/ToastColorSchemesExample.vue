<template>
  <CToast :autohide="false" color="primary" class="text-white align-items-center" visible>
    <div class="d-flex">
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
      <CToastClose class="me-2 m-auto" white />
    </div>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CToastClose } from '@coreui/vue'
</script>
