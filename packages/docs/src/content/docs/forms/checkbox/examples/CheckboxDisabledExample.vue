<template>
  <CFormCheck id="lucas" value="Lucas" label="Lucas" v-model="checkedNames" />
  <CFormCheck id="andrew" value="Andrew" label="Andrew" v-model="checkedNames" />
  <CFormCheck id="anna" value="Anna" label="Anna" v-model="checkedNames" />
  <div>Checked names: {{ checkedNames }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checkedNames = ref(['Andrew'])
</script>
