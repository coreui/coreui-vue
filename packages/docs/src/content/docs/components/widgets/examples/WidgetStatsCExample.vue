<template>
  <CRow>
    <CCol :sm="6">
      <CWidgetStatsC
        class="mb-3"
        value="87.500"
        :progress="{ color: 'info', value: 75 }"
        title="Visitors"
      >
        <template #icon><CIcon icon="cil-people" height="36" /></template>
        <template #title>Visitors</template>
      </CWidgetStatsC>
    </CCol>
    <CCol :sm="6">
      <CWidgetStatsC
        class="mb-3"
        inverse
        color="info"
        value="385"
        :progress="{ value: 75 }"
        title="New clients"
      >
        <template #icon><CIcon icon="cil-user-follow" height="36" /></template>
      </CWidgetStatsC>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CWidgetStatsC } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
</script>
