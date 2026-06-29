<template>
  <div class="docs-example-row">
    <CRow :xs="{ gutter: 0 }">
      <CCol sm="6" md="8">.col-sm-6 .col-md-8</CCol>
      <CCol xs="6" md="4">.col-6 .col-md-4</CCol>
    </CRow>
  </div>
</template>

<script setup>
import { CRow, CCol } from '@coreui/vue'
</script>
