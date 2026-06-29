<template>
  <CFormCheck
    id="exampleRadios1"
    type="radio"
    name="exampleRadios"
    value="option1"
    label="Default radio"
    checked
  />
  <CFormCheck
    id="exampleRadios2"
    type="radio"
    name="exampleRadios"
    value="option2"
    label="Second default radio"
  />
  <CFormCheck
    id="exampleRadios3"
    type="radio"
    name="exampleRadios"
    value="option3"
    label="Disabled radio"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
