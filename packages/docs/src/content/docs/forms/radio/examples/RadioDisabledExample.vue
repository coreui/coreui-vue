<template>
  <CFormCheck type="radio" id="flexRadioVModel1" inline label="One" value="One" v-model="picked" />
  <CFormCheck type="radio" id="flexRadioVModel2" inline label="Two" value="Two" v-model="picked" />
  <CFormCheck
    type="radio"
    id="flexRadioVModel3"
    inline
    label="Three"
    value="Three"
    v-model="picked"
  />
  <CFormCheck
    type="radio"
    id="flexRadioVModel4"
    inline
    label="Four"
    value="Four"
    v-model="picked"
  />
  <CFormCheck
    type="radio"
    id="flexRadioVModel5"
    inline
    label="Five"
    value="Five"
    v-model="picked"
  />
  <div>Picked: {{ picked }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
