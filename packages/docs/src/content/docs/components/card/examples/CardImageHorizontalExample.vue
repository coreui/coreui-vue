<template>
  <CCard class="mb-3" style="max-width: 540px">
    <CRow class="g-0">
      <CCol :md="4">
        <CImage class="rounded-start" fluid src="/images/vue.jpg" />
      </CCol>
      <CCol :md="8">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
          <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
        </CCardBody>
      </CCol>
    </CRow>
  </CCard>
</template>

<script setup>
import { CCard, CRow, CCol, CImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
