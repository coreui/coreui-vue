<template>
  <CFormSwitch id="formSwitchCheckDefault" label="Default switch checkbox input" />
  <CFormSwitch id="formSwitchCheckChecked" label="Checked switch checkbox input" checked />
  <CFormSwitch id="formSwitchCheckDisabled" label="Disabled switch checkbox input" disabled />
  <CFormSwitch
    id="formSwitchCheckCheckedDisabled"
    label="Disabled checked switch checkbox input"
    checked
    disabled
  />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
