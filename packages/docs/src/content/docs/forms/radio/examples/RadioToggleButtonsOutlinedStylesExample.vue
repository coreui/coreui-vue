<template>
  <CFormCheck
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    id="option1"
    autocomplete="off"
    label="Checked"
    checked
  />
  <CFormCheck
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    id="option2"
    autocomplete="off"
    label="Radio"
  />
  <CFormCheck
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    id="option3"
    autocomplete="off"
    label="Radio"
    disabled
  />
  <CFormCheck
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    id="option4"
    autocomplete="off"
    label="Radio"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
