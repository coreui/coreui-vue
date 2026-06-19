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
