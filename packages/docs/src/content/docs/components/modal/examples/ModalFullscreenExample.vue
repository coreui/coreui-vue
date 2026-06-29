<template>
  <CButton
    color="primary"
    @click="
      () => {
        xlDemo = true
      }
    "
    >Extra large modal</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        lgDemo = true
      }
    "
    >Large modal</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        smDemo = true
      }
    "
    >Small modal</CButton
  >
  <CModal
    size="xl"
    :visible="xlDemo"
    aria-labelledby="OptionalSizesExample1"
    @close="
      () => {
        xlDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    size="lg"
    :visible="lgDemo"
    aria-labelledby="OptionalSizesExample2"
    @close="
      () => {
        lgDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    size="sm"
    :visible="smDemo"
    aria-labelledby="OptionalSizesExample3"
    @close="
      () => {
        smDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const xlDemo = ref(false)
const lgDemo = ref(false)
const smDemo = ref(false)
</script>
