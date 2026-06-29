<template>
  <div>
    <CFormCheck
      id="btn-check-outlined"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Single toggle"
    />
  </div>
  <div>
    <CFormCheck
      id="btn-check-2-outlined"
      :button="{ color: 'secondary', variant: 'outline' }"
      autocomplete="off"
      label="Checked"
      checked
    />
  </div>
  <div>
    <CFormCheck
      id="success-outlined"
      :button="{ color: 'success', variant: 'outline' }"
      type="radio"
      name="options-outlined"
      autocomplete="off"
      label="Radio"
      checked
    />
    <CFormCheck
      id="danger-outlined"
      :button="{ color: 'danger', variant: 'outline' }"
      type="radio"
      name="options-outlined"
      autocomplete="off"
      label="Radio"
    />
  </div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
