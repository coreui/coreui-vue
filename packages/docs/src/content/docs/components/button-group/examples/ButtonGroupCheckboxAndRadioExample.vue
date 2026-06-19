<template>
  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
    <CFormCheck
      :button="{ color: 'primary', variant: 'outline' }"
      id="btncheck1"
      autocomplete="off"
      label="Checkbox 1"
    />
    <CFormCheck
      :button="{ color: 'primary', variant: 'outline' }"
      id="btncheck2"
      autocomplete="off"
      label="Checkbox 2"
    />
    <CFormCheck
      :button="{ color: 'primary', variant: 'outline' }"
      id="btncheck3"
      autocomplete="off"
      label="Checkbox 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
