<template>
  <CButton color="primary" @click="createToast">Send a toast</CButton>
  <CToaster class="p-3" placement="top-end">
    <CToast v-for="(toast, index) in toasts" :key="index" visible>
      <CToastHeader close-button>
        <span class="me-auto fw-bold">{{ toast.title }}</span>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>
        {{ toast.content }}
      </CToastBody>
    </CToast>
  </CToaster>
</template>

<script setup>
import { CButton, CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue'
import { ref } from 'vue'
const toasts = ref([])
const createToast = () => {
  toasts.value.push({
    title: 'new toast',
    content: 'Lorem ipsum dolor cet emit',
  })
}
</script>
