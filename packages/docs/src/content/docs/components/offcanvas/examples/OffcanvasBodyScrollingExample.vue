<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleScrolling = !visibleScrolling
      }
    "
    >Enable body scrolling</CButton
  >
  <COffcanvas
    :backdrop="false"
    placement="start"
    scroll
    :visible="visibleScrolling"
    @hide="
      () => {
        visibleScrolling = !visibleScrolling
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleScrolling = false
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
const visibleScrolling = ref(false)
</script>
