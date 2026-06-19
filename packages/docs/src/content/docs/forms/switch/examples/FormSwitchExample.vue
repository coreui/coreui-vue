<template>
  <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
  <CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" checked />
  <CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled />
  <CFormSwitch
    label="Disabled checked switch checkbox input"
    id="formSwitchCheckCheckedDisabled"
    checked
    disabled
  />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
