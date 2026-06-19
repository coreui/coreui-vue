<template>
  <CAlert color="primary" class="d-flex align-items-center">
    <CIcon icon="cil-info" class="flex-shrink-0 me-2" width="24" height="24" />

    <div>An example alert with an icon</div>
  </CAlert>
  <CAlert color="success" class="d-flex align-items-center">
    <CIcon icon="cil-check-circle" class="flex-shrink-0 me-2" width="24" height="24" />
    <div>An example success alert with an icon</div>
  </CAlert>
  <CAlert color="warning" class="d-flex align-items-center">
    <CIcon icon="cil-warning" class="flex-shrink-0 me-2" width="24" height="24" />
    <div>An example warning alert with an icon</div>
  </CAlert>
  <CAlert color="danger" class="d-flex align-items-center">
    <CIcon icon="cil-burn" class="flex-shrink-0 me-2" width="24" height="24" />
    <div>An example danger alert with an icon</div>
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { ref } from 'vue'
const liveExampleVisible = ref(false)
const message = () => {
  alert('👋 Well, hi there! Thanks for dismissing me.')
}
</script>
