<template>
  <CContainer>
    <CRow :xs="{ gutter: 2 }">
      <CCol :xs="{ span: 6 }">
        <div class="p-3 border bg-light">Custom column padding</div>
      </CCol>
      <CCol :xs="{ span: 6 }">
        <div class="p-3 border bg-light">Custom column padding</div>
      </CCol>
      <CCol :xs="{ span: 6 }">
        <div class="p-3 border bg-light">Custom column padding</div>
      </CCol>
      <CCol :xs="{ span: 6 }">
        <div class="p-3 border bg-light">Custom column padding</div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script setup>
import { CContainer, CRow, CCol } from '@coreui/vue'
</script>
