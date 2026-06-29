<template>
  <CFormCheck id="flexRadioVModel1" v-model="picked" type="radio" inline label="One" value="One" />
  <CFormCheck id="flexRadioVModel2" v-model="picked" type="radio" inline label="Two" value="Two" />
  <CFormCheck
    id="flexRadioVModel3"
    v-model="picked"
    type="radio"
    inline
    label="Three"
    value="Three"
  />
  <CFormCheck
    id="flexRadioVModel4"
    v-model="picked"
    type="radio"
    inline
    label="Four"
    value="Four"
  />
  <CFormCheck
    id="flexRadioVModel5"
    v-model="picked"
    type="radio"
    inline
    label="Five"
    value="Five"
  />
  <div>Picked: {{ picked }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
