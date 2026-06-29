<template>
  <template
    v-for="item in [
      { color: 'primary' },
      { color: 'secondary' },
      { color: 'success' },
      { color: 'danger' },
      { color: 'warning' },
      { color: 'info' },
      { color: 'light' },
      { color: 'dark' },
    ]"
    :key="item.color"
  >
    <CCard :text-bg-color="item.color" class="mb-3" style="max-width: 18rem">
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
