<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleTop = !visibleTop
      }
    "
    >Toggle top offcanvas</CButton
  >
  <COffcanvas
    placement="top"
    :visible="visibleTop"
    @hide="
      () => {
        visibleTop = !visibleTop
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleTop = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import {
  CButton,
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
