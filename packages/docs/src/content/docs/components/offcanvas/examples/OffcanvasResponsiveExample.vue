<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleResponsiveBackdrop = !visibleResponsiveBackdrop
      }
    "
    >Toggle offcanvas</CButton
  >
  <CAlert class="d-none d-lg-block" color="info"
    >Resize your browser to show the responsive offcanvas toggle.</CAlert
  >
  <COffcanvas
    placement="start"
    responsive="lg"
    :visible="visibleResponsiveBackdrop"
    @hide="
      () => {
        visibleResponsiveBackdrop = !visibleResponsiveBackdrop
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleResponsiveBackdrop = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>This is content within an <code>.offcanvas-lg</code></p>
      .
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
  CAlert,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(false)
const visibleScrolling = ref(false)
const visibleWithBothOptions = ref(false)
const visibleWithStaticBackdrop = ref(false)
const visibleResponsiveBackdrop = ref(false)
const visibleTop = ref(false)
const visibleEnd = ref(false)
const visibleBottom = ref(false)
</script>
