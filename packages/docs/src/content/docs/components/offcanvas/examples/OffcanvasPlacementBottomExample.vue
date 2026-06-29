<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleBottom = !visibleBottom
      }
    "
    >Toggle bottom offcanvas</CButton
  >
  <COffcanvas
    placement="bottom"
    :visible="visibleBottom"
    @hide="
      () => {
        visibleBottom = !visibleBottom
      }
    "
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton
        class="text-reset"
        @click="
          () => {
            visibleBottom = false
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
const visibleBottom = ref(false)
</script>
