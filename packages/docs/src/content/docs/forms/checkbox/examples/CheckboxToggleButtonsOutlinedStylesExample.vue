<template>
  <CFormCheck reverse id="reverseCheckbox1" value="option1" label="Reverse checkbox" />
  <CFormCheck
    reverse
    id="reverseCheckbox2"
    value="option2"
    label="Disabled reverse checkbox"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
