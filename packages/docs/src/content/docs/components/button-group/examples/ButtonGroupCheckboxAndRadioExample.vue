<template>
  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
    <CFormCheck
      id="btncheck1"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Checkbox 1"
    />
    <CFormCheck
      id="btncheck2"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Checkbox 2"
    />
    <CFormCheck
      id="btncheck3"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Checkbox 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
