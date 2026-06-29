<template>
  <CFormCheck
    id="option1"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Checked"
    checked
  />
  <CFormCheck
    id="option2"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Radio"
  />
  <CFormCheck
    id="option3"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Radio"
    disabled
  />
  <CFormCheck
    id="option4"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Radio"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
