<template>
  <CAlert color="primary" class="d-flex align-items-center">
    <CIcon :icon="cilInfo" class="flex-shrink-0 me-2" width="24" height="24" />

    <div>An example alert with an icon</div>
  </CAlert>
  <CAlert color="success" class="d-flex align-items-center">
    <CIcon :icon="cilCheckCircle" class="flex-shrink-0 me-2" width="24" height="24" />
    <div>An example success alert with an icon</div>
  </CAlert>
  <CAlert color="warning" class="d-flex align-items-center">
    <CIcon :icon="cilWarning" class="flex-shrink-0 me-2" width="24" height="24" />
    <div>An example warning alert with an icon</div>
  </CAlert>
  <CAlert color="danger" class="d-flex align-items-center">
    <CIcon :icon="cilBurn" class="flex-shrink-0 me-2" width="24" height="24" />
    <div>An example danger alert with an icon</div>
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilBurn, cilCheckCircle, cilInfo, cilWarning } from '@coreui/icons'
</script>
