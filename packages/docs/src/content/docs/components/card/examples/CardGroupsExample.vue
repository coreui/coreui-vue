<template>
  <CCardGroup>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</CCardText
        >
        <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This card has supporting text below as a natural lead-in to additional
          content.</CCardText
        >
        <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This is a wider card with supporting text below as a natural lead-in to additional
          content. This card has even longer content than the first to show that equal height
          action.</CCardText
        >
        <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCard>
  </CCardGroup>
</template>

<script setup>
import { CCardGroup, CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
