<template>
  <CButtonGroup vertical role="group" aria-label="Vertical button group">
    <CFormCheck
      id="vbtnradio1"
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      autocomplete="off"
      label="Radio 1"
      checked
    />
    <CFormCheck
      id="vbtnradio2"
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      autocomplete="off"
      label="Radio 2"
    />
    <CFormCheck
      id="vbtnradio3"
      type="radio"
      :button="{ color: 'danger', variant: 'outline' }"
      name="vbtnradio"
      autocomplete="off"
      label="Radio 3"
    />
  </CButtonGroup>
</template>

<script setup>
import { CButtonGroup, CFormCheck } from '@coreui/vue'
</script>
