<template>
  <CModal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
    <CModalHeader>
      <CModalTitle>Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Modal body text goes here.</CModalBody>
    <CModalFooter>
      <CButton color="secondary">Close</CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/vue'
</script>
