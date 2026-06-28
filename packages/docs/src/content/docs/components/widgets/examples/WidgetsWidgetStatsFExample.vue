<template>
  <CRow>
    <CCol :sm="6">
      <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
        <template #icon>
          <CIcon icon="cil-settings" size="xl" />
        </template>
        <template #footer>
          <CLink
            class="font-weight-bold font-xs text-body-secondary"
            href="https://coreui.io/"
            rel="noopener norefferer"
            target="_blank"
          >
            View more
            <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
          </CLink>
        </template>
      </CWidgetStatsF>
    </CCol>
    <CCol :sm="6">
      <CWidgetStatsF color="info" title="Title" value="$1.999,50">
        <template #icon>
          <CIcon icon="cil-settings" size="xl" />
        </template>
        <template #footer>
          <CLink
            class="font-weight-bold font-xs text-body-secondary"
            href="https://coreui.io/"
            rel="noopener norefferer"
            target="_blank"
          >
            View more
            <CIcon icon="cil-arrow-right" class="ms-auto" width="16" />
          </CLink>
        </template>
      </CWidgetStatsF>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CWidgetStatsF, CLink } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
</script>
