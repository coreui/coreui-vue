<template>
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenDemo = true
      }
    "
    >Full screen</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenSmDemo = true
      }
    "
    >Full screen below sm</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenMdDemo = true
      }
    "
    >Full screen below md</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenLgDemo = true
      }
    "
    >Full screen below lg</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenXlDemo = true
      }
    "
    >Full screen below xl</CButton
  >
  <CButton
    color="primary"
    @click="
      () => {
        fullscreenXxlDemo = true
      }
    "
    >Full screen below xxl</CButton
  >
  <CModal
    fullscreen
    :visible="fullscreenDemo"
    @close="
      () => {
        fullscreenDemo = false
      }
    "
    aria-labelledby="FullscreenExample1"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="sm"
    :visible="fullscreenSmDemo"
    @close="
      () => {
        fullscreenSmDemo = false
      }
    "
    aria-labelledby="FullscreenExample2"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="md"
    :visible="fullscreenMdDemo"
    @close="
      () => {
        fullscreenMdDemo = false
      }
    "
    aria-labelledby="FullscreenExample3"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="lg"
    :visible="fullscreenLgDemo"
    @close="
      () => {
        fullscreenLgDemo = false
      }
    "
    aria-labelledby="FullscreenExample4"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="xl"
    :visible="fullscreenXlDemo"
    @close="
      () => {
        fullscreenXlDemo = false
      }
    "
    aria-labelledby="FullscreenExample5"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="xxl"
    :visible="fullscreenXxlDemo"
    @close="
      () => {
        fullscreenXxlDemo = false
      }
    "
    aria-labelledby="FullscreenExample6"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample6">Full screen below xxl</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const fullscreenDemo = ref(false)
const fullscreenSmDemo = ref(false)
const fullscreenMdDemo = ref(false)
const fullscreenLgDemo = ref(false)
const fullscreenXlDemo = ref(false)
const fullscreenXxlDemo = ref(false)
</script>
