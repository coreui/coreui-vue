<template>
  <CFormSwitch id="reverseFormSwitch1" reverse type="radio" label="Reverse switch" />
  <CFormSwitch
    id="reverseFormSwitch2"
    reverse
    type="radio"
    label="Disabled reverse switch"
    disabled
  />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
