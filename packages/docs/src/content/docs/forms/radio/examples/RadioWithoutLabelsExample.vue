<template>
  <CFormCheck reverse type="radio" id="reverseOption1" value="option1" label="Reverse radio" />
  <CFormCheck
    reverse
    type="radio"
    id="reverseOption2"
    value="option2"
    label="Disabled reverse radio"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
