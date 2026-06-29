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
    aria-labelledby="FullscreenExample1"
    @close="
      () => {
        fullscreenDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="sm"
    :visible="fullscreenSmDemo"
    aria-labelledby="FullscreenExample2"
    @close="
      () => {
        fullscreenSmDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="md"
    :visible="fullscreenMdDemo"
    aria-labelledby="FullscreenExample3"
    @close="
      () => {
        fullscreenMdDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="lg"
    :visible="fullscreenLgDemo"
    aria-labelledby="FullscreenExample4"
    @close="
      () => {
        fullscreenLgDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="xl"
    :visible="fullscreenXlDemo"
    aria-labelledby="FullscreenExample5"
    @close="
      () => {
        fullscreenXlDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
    </CModalHeader>
    <CModalBody> ... </CModalBody>
  </CModal>
  <CModal
    fullscreen="xxl"
    :visible="fullscreenXxlDemo"
    aria-labelledby="FullscreenExample6"
    @close="
      () => {
        fullscreenXxlDemo = false
      }
    "
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
