<template>
  <CToast :autohide="false" class="align-items-center" visible>
    <CToastBody>
      Hello, world! This is a toast message.
      <div class="mt-2 pt-2 border-top">
        <CButton type="button" color="primary" size="sm"> Take action </CButton>
        <CToastClose as="CButton" color="secondary" size="sm" class="ms-1">Close</CToastClose>
      </div>
    </CToastBody>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CButton, CToastClose } from '@coreui/vue'
</script>
