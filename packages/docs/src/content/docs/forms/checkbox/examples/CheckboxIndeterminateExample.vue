<template>
  <CFormCheck id="flexCheckDefaultVModel" label="Default checkbox" v-model="checked" />
  <div>Checked: {{ checked }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
</script>
