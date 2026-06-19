<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip color="primary">
      <span class="chip-icon">
        <CIcon :icon="cilUser" />
      </span>
      User
    </CChip>
    <CChip color="success">
      <span class="chip-icon">
        <CIcon :icon="cilCheckCircle" />
      </span>
      Verified
    </CChip>
    <CChip color="danger">
      <span class="chip-icon">
        <CIcon :icon="cilXCircle" />
      </span>
      Error
    </CChip>
    <CChip color="warning">
      <span class="chip-icon">
        <CIcon :icon="cilWarning" />
      </span>
      Warning
    </CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilUser, cilCheckCircle, cilXCircle, cilWarning } from '@coreui/icons'
</script>
