<template>
  <CCard class="mb-3">
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</CCardText
      >
      <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
  <CCard class="mb-3">
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</CCardText
      >
      <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
    <CCardImage orientation="bottom" src="/images/vue.jpg" />
  </CCard>
</template>

<script setup>
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
