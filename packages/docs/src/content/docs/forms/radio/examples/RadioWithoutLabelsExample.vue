<template>
  <CFormCheck id="reverseOption1" reverse type="radio" value="option1" label="Reverse radio" />
  <CFormCheck
    id="reverseOption2"
    reverse
    type="radio"
    value="option2"
    label="Disabled reverse radio"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
