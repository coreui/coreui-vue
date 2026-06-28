<template>
  <div class="docs-example-offcanvas bg-light">
    <COffcanvas :backdrop="false" placement="start" :visible="true">
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton class="text-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any Bootstrap component or
        custom elements here.
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
import { ref } from 'vue'
const visible = ref(false)
</script>
