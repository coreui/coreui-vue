<template>
  <CRow>
    <CCol :sm="6">
      <CWidgetStatsB class="mb-3" :progress="{ color: 'success', value: 75 }">
        <template #text>Widget helper text</template>
        <template #title>Widget title</template>
        <template #value>89.9%</template>
      </CWidgetStatsB>
    </CCol>
    <CCol :sm="6">
      <CWidgetStatsB
        class="mb-3"
        color="primary"
        inverse
        :progress="{ value: 75 }"
        text="Widget helper text"
        title="Widget title"
        value="12.124"
      />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CWidgetStatsB } from '@coreui/vue'
</script>
