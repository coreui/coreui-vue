<template>
  <CFormSwitch reverse type="radio" id="reverseFormSwitch1" label="Reverse switch" />
  <CFormSwitch
    reverse
    type="radio"
    id="reverseFormSwitch2"
    label="Disabled reverse switch"
    disabled
  />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
