<template>
  <CFormCheck
    id="inlineCheckbox1"
    inline
    type="radio"
    name="inlineRadioOptions"
    value="option1"
    label="1"
  />
  <CFormCheck
    id="inlineCheckbox2"
    inline
    type="radio"
    name="inlineRadioOptions"
    value="option2"
    label="2"
  />
  <CFormCheck
    id="inlineCheckbox3"
    inline
    type="radio"
    name="inlineRadioOptions"
    value="option3"
    label="3 (disabled)"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
