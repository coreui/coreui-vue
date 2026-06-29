<template>
  <CFormCheck id="lucas" v-model="checkedNames" value="Lucas" label="Lucas" />
  <CFormCheck id="andrew" v-model="checkedNames" value="Andrew" label="Andrew" />
  <CFormCheck id="anna" v-model="checkedNames" value="Anna" label="Anna" />
  <div>Checked names: {{ checkedNames }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checkedNames = ref(['Andrew'])
</script>
