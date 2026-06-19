<template>
  <CSearchButton
    aria-label="Open search panel"
    aria-controls="search-button-offcanvas"
    shortcut="meta+shift+o,ctrl+shift+o"
    @trigger="visible = true"
  />
  <COffcanvas
    id="search-button-offcanvas"
    placement="end"
    :visible="visible"
    @hide="visible = false"
  >
    <COffcanvasHeader>
      <COffcanvasTitle>Search panel</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="visible = false" />
    </COffcanvasHeader>
    <COffcanvasBody>
      <CFormInput type="search" class="mb-3" placeholder="Search..." aria-label="Search in panel" />
      <p class="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>

<script setup>
import { ref } from 'vue'
import {
  CCloseButton,
  CFormInput,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CSearchButton,
} from '@coreui/vue'

const visible = ref(false)
</script>
