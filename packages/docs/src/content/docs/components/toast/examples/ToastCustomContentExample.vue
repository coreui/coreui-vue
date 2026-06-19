<template>
  <CToast :autohide="false" class="align-items-center" visible>
    <div class="d-flex">
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
      <CToastClose class="me-2 m-auto" />
    </div>
  </CToast>
</template>

<script setup>
import { CToast, CToastBody, CToastClose } from '@coreui/vue'
import { ref } from 'vue'
const toasts = ref([])
const createToast = () => {
  toasts.value.push({
    title: 'new toast',
    content: 'Lorem ipsum dolor cet emit',
  })
}
</script>
