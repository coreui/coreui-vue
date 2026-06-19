<template>
  <CFormCheck
    type="radio"
    name="exampleRadios"
    id="exampleRadios1"
    value="option1"
    label="Default radio"
    checked
  />
  <CFormCheck
    type="radio"
    name="exampleRadios"
    id="exampleRadios2"
    value="option2"
    label="Second default radio"
  />
  <CFormCheck
    type="radio"
    name="exampleRadios"
    id="exampleRadios3"
    value="option3"
    label="Disabled radio"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
