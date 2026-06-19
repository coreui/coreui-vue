<template>
  <CButtonGroup vertical role="group" aria-label="Vertical button group">
    <CFormCheck
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      id="vbtnradio1"
      autocomplete="off"
      label="Radio 1"
      checked
    />
    <CFormCheck
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      id="vbtnradio2"
      autocomplete="off"
      label="Radio 2"
    />
    <CFormCheck
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      id="vbtnradio3"
      autocomplete="off"
      label="Radio 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
