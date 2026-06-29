<template>
  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
    <CFormCheck
      id="btnradio1"
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      autocomplete="off"
      label="Radio 1"
      checked
    />
    <CFormCheck
      id="btnradio2"
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      autocomplete="off"
      label="Radio 2"
    />
    <CFormCheck
      id="btnradio3"
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      autocomplete="off"
      label="Radio 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
