<template>
  <template
    v-for="item in [
      { color: 'primary', textColor: 'primary' },
      { color: 'secondary', textColor: 'secondary' },
      { color: 'success', textColor: 'success' },
      { color: 'danger', textColor: 'danger' },
      { color: 'warning', textColor: 'warning' },
      { color: 'info', textColor: 'info' },
      { color: 'light' },
      { color: 'dark' },
    ]"
    :key="item.color"
  >
    <CCard
      :text-color="item.textColor"
      class="mb-3"
      :class="'border-' + item.color"
      style="max-width: 18rem"
    >
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
