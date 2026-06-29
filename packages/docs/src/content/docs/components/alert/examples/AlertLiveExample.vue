<template>
  <CAlert
    color="primary"
    :visible="liveExampleVisible"
    dismissible
    @close="
      () => {
        liveExampleVisible = false
      }
    "
    >A simple primary alert—check it out!</CAlert
  >
  <CButton
    color="primary"
    @click="
      () => {
        liveExampleVisible = true
      }
    "
    >Show live alert</CButton
  >
</template>

<script setup>
import { CAlert, CButton } from '@coreui/vue'
import { ref } from 'vue'
const liveExampleVisible = ref(false)
</script>
