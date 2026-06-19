<template>
  <div>
    <CFormCheck
      :button="{ color: 'primary', variant: 'outline' }"
      id="btn-check-outlined"
      autocomplete="off"
      label="Single toggle"
    />
  </div>
  <div>
    <CFormCheck
      :button="{ color: 'secondary', variant: 'outline' }"
      id="btn-check-2-outlined"
      autocomplete="off"
      label="Checked"
      checked
    />
  </div>
  <div>
    <CFormCheck
      :button="{ color: 'success', variant: 'outline' }"
      type="radio"
      name="options-outlined"
      id="success-outlined"
      autocomplete="off"
      label="Radio"
      checked
    />
    <CFormCheck
      :button="{ color: 'danger', variant: 'outline' }"
      type="radio"
      name="options-outlined"
      id="danger-outlined"
      autocomplete="off"
      label="Radio"
    />
  </div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
