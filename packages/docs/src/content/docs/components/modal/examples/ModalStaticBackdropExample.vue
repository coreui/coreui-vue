<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleStaticBackdropDemo = true
      }
    "
    >Launch static backdrop modal</CButton
  >
  <CModal
    backdrop="static"
    :visible="visibleStaticBackdropDemo"
    aria-labelledby="StaticBackdropExampleLabel"
    @close="
      () => {
        visibleStaticBackdropDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleStaticBackdropDemo = false
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
const visibleStaticBackdropDemo = ref(false)
</script>
