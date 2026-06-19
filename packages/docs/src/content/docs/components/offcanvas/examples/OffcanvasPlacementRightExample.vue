<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleEnd = !visibleEnd
      }
    "
    >Toggle right offcanvas</CButton
  >
  <COffcanvas
    placement="end"
    :visible="visibleEnd"
    @hide="
      () => {
        visibleEnd = !visibleEnd
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleEnd = false
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
