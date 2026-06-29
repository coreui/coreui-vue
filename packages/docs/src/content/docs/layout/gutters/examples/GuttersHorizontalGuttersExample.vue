<template>
  <CContainer class="px-4">
    <CRow :xs="{ gutterX: 5 }">
      <CCol>
        <div class="p-3 border bg-light">Custom column padding</div>
      </CCol>
      <CCol>
        <div class="p-3 border bg-light">Custom column padding</div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
