<template>
  <CFormCheck
    id="flexRadioDisabled"
    type="radio"
    name="flexRadioDisabled"
    label="Disabled radio"
    disabled
  />
  <CFormCheck
    id="flexRadioCheckedDisabled"
    type="radio"
    name="flexRadioDisabled"
    label="Disabled checked radio"
    checked
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
