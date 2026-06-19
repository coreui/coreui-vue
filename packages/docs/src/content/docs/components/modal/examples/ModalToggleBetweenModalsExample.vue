<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleToggleBetweenModalsDemo1 = true
      }
    "
    >Open first modal</CButton
  >
  <CModal
    :visible="visibleToggleBetweenModalsDemo1"
    @close="
      () => {
        visibleToggleBetweenModalsDemo1 = false
      }
    "
    aria-labelledby="ToggleBetweenModalsExample1"
  >
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Show a second modal and hide this one with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="primary"
        @click="
          () => {
            visibleToggleBetweenModalsDemo1 = false
            visibleToggleBetweenModalsDemo2 = true
          }
        "
        >Open second modal</CButton
      >
    </CModalFooter>
  </CModal>
  <CModal
    :visible="visibleToggleBetweenModalsDemo2"
    @close="
      () => {
        visibleToggleBetweenModalsDemo1 = true
        visibleToggleBetweenModalsDemo2 = false
      }
    "
    aria-labelledby="ToggleBetweenModalsExample2"
  >
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Hide this modal and show the first with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="primary"
        @click="
          () => {
            visibleToggleBetweenModalsDemo1 = true
            visibleToggleBetweenModalsDemo2 = false
          }
        "
        >Back to first</CButton
      >
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/vue'
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
