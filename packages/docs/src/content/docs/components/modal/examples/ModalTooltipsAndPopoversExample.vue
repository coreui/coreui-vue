<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleVerticallyCenteredScrollableDemo = true
      }
    "
    >Vertically centered scrollable modal</CButton
  >
  <CModal
    alignment="center"
    scrollable
    :visible="visibleVerticallyCenteredScrollableDemo"
    @close="
      () => {
        visibleVerticallyCenteredScrollableDemo = false
      }
    "
    aria-labelledby="VerticallyCenteredExample2"
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCenteredScrollableDemo = false
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
