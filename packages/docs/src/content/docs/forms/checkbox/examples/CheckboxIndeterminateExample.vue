<template>
  <CFormCheck id="flexCheckDefaultVModel" v-model="checked" label="Default checkbox" />
  <div>Checked: {{ checked }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
</script>
