<template>
  <div class="docs-example-offcanvas bg-body-secondary p-0 overflow-hidden">
    <COffcanvas :backdrop="false" dark placement="start" :visible="true">
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton class="text-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any React component or custom
        elements here.
      </COffcanvasBody>
    </COffcanvas>
  </div>
</template>

<script setup>
import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/vue'
</script>
