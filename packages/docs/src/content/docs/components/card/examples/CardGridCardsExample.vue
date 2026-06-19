<template>
  <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3 }">
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/images/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/images/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This card has supporting text below as a natural lead-in to additional
            content.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/images/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from '@coreui/vue'
</script>
