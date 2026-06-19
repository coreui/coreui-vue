<template>
  <CFormCheck id="flexCheckDefault" label="Default checkbox" />
  <CFormCheck id="flexCheckChecked" label="Checked checkbox" checked />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref(['Andrew'])
</script>
