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
    @close="
      () => {
        xlDemo = false
      }
    "
    aria-labelledby="OptionalSizesExample1"
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    size="lg"
    :visible="lgDemo"
    @close="
      () => {
        lgDemo = false
      }
    "
    aria-labelledby="OptionalSizesExample2"
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    size="sm"
    :visible="smDemo"
    @close="
      () => {
        smDemo = false
      }
    "
    aria-labelledby="OptionalSizesExample3"
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
const visibleLiveDemo = ref(false)
const visibleStaticBackdropDemo = ref(false)
const visibleScrollingLongContentDemo = ref(false)
const visibleScrollableDemo = ref(false)
const visibleVerticallyCenteredDemo = ref(false)
const visibleVerticallyCenteredScrollableDemo = ref(false)
const visibleTooltipsAndPopoversDemo = ref(false)
const visibleToggleBetweenModalsDemo1 = ref(false)
const visibleToggleBetweenModalsDemo2 = ref(false)
const xlDemo = ref(false)
const lgDemo = ref(false)
const smDemo = ref(false)
const fullscreenDemo = ref(false)
const fullscreenSmDemo = ref(false)
const fullscreenMdDemo = ref(false)
const fullscreenLgDemo = ref(false)
const fullscreenXlDemo = ref(false)
const fullscreenXxlDemo = ref(false)
</script>
