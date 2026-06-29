<template>
  <template
    v-for="item in [
      { color: 'primary', textColor: 'white' },
      { color: 'secondary', textColor: 'white' },
      { color: 'success', textColor: 'white' },
      { color: 'danger', textColor: 'white' },
      { color: 'warning' },
      { color: 'info', textColor: 'white' },
      { color: 'light' },
      { color: 'dark', textColor: 'white' },
    ]"
    :key="item.color"
  >
    <CCard :color="item.color" :text-color="item.textColor" class="mb-3" style="max-width: 18rem">
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>{{ item.color }} card title</CCardTitle>
        <CCardText
          >Some quick example text to build on the card title and make up the bulk of the card's
          content.</CCardText
        >
      </CCardBody>
    </CCard>
  </template>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
