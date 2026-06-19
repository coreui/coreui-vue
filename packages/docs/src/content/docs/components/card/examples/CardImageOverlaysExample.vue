<template>
  <CCard class="mb-3 bg-dark text-white">
    <CCardImage src="/images/vue.jpg" />
    <CCardImageOverlay>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</CCardText
      >
      <CCardText>Last updated 3 mins ago</CCardText>
    </CCardImageOverlay>
  </CCard>
</template>

<script setup>
import { CCard, CCardImage, CCardImageOverlay, CCardTitle, CCardText } from '@coreui/vue'
</script>
