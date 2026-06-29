<template>
  <CPopover content="Disabled popover" placement="right" :trigger="['hover', 'focus']">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton color="primary" disabled>Disabled button</CButton>
      </span>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
