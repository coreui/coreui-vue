<template>
  <CFormSelect
    aria-label="Default select example"
    :options="[
      'Open this select menu',
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3', disabled: true },
    ]"
  ></CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
