<template>
  <CFormCheck id="reverseCheckbox1" reverse value="option1" label="Reverse checkbox" />
  <CFormCheck
    id="reverseCheckbox2"
    reverse
    value="option2"
    label="Disabled reverse checkbox"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
