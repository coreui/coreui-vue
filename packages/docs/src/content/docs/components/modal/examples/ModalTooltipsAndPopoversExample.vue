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
const visibleVerticallyCenteredScrollableDemo = ref(false)
</script>
