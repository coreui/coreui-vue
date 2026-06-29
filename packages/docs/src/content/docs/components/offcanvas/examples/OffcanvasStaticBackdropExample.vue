<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleWithStaticBackdrop = !visibleWithStaticBackdrop
      }
    "
    >Toggle static offcanvas</CButton
  >
  <COffcanvas
    backdrop="static"
    placement="start"
    :visible="visibleWithStaticBackdrop"
    @hide="
      () => {
        visibleWithStaticBackdrop = !visibleWithStaticBackdrop
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleWithStaticBackdrop = false
          }
        "
      />
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>I will not close if you click outside of me.</p>
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
const visibleWithStaticBackdrop = ref(false)
</script>
