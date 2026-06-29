<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleLiveDemo = true
      }
    "
    >Launch demo modal</CButton
  >
  <CModal
    :visible="visibleLiveDemo"
    aria-labelledby="LiveDemoExampleLabel"
    @close="
      () => {
        visibleLiveDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleLiveDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
import { ref } from 'vue'
const visibleLiveDemo = ref(false)
</script>
