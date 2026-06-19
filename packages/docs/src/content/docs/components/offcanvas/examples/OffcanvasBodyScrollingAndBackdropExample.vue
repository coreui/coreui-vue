<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleWithBothOptions = !visibleWithBothOptions
      }
    "
    >Enable both scrolling & backdrop</CButton
  >
  <COffcanvas
    placement="start"
    scroll
    :visible="visibleWithBothOptions"
    @hide="
      () => {
        visibleWithBothOptions = !visibleWithBothOptions
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleWithBothOptions = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
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
