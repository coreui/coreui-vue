<template>
  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
    <CFormCheck
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      id="btnradio1"
      autocomplete="off"
      label="Radio 1"
      checked
    />
    <CFormCheck
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      id="btnradio2"
      autocomplete="off"
      label="Radio 2"
    />
    <CFormCheck
      type="radio"
      :button="{ color: 'primary', variant: 'outline' }"
      name="btnradio"
      id="btnradio3"
      autocomplete="off"
      label="Radio 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
