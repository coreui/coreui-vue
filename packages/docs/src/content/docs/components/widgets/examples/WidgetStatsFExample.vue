<template>
  <CRow>
    <CCol :sm="6">
      <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
        <template #icon>
          <CIcon icon="cil-settings" size="xl" />
        </template>
      </CWidgetStatsF>
    </CCol>
    <CCol :sm="6">
      <CWidgetStatsF color="info" title="Title" value="$1.999,50">
        <template #icon>
          <CIcon icon="cil-settings" size="xl" />
        </template>
      </CWidgetStatsF>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CWidgetStatsF } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
</script>
