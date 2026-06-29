<template>
  <CButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
    <CButtonGroup class="me-2" role="group" aria-label="First group">
      <CButton color="primary">1</CButton>
      <CButton color="primary">2</CButton>
      <CButton color="primary">3</CButton>
      <CButton color="primary">4</CButton>
    </CButtonGroup>
    <CButtonGroup class="me-2" role="group" aria-label="Second group">
      <CButton color="secondary">5</CButton>
      <CButton color="secondary">6</CButton>
      <CButton color="secondary">7</CButton>
    </CButtonGroup>
    <CButtonGroup class="me-2" role="group" aria-label="Third group">
      <CButton color="info">8</CButton>
    </CButtonGroup>
  </CButtonToolbar>
</template>

<script setup>
import { CButtonToolbar, CButtonGroup, CButton } from '@coreui/vue'
</script>
