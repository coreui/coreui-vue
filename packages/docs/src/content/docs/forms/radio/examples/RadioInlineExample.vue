<template>
  <CFormCheck
    type="radio"
    name="flexRadioDisabled"
    id="flexRadioDisabled"
    label="Disabled radio"
    disabled
  />
  <CFormCheck
    type="radio"
    name="flexRadioDisabled"
    id="flexRadioCheckedDisabled"
    label="Disabled checked radio"
    checked
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
