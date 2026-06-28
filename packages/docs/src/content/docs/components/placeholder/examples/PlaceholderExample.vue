<template>
  <div class="d-flex justify-content-around">
    <CCard style="width: 18rem">
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CButton color="primary" href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
    <CCard style="width: 18rem">
      <CCardImage
        as="svg"
        orientation="top"
        width="100%"
        height="162"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
      </CCardImage>
      <CCardBody>
        <CCardTitle v-c-placeholder="{ animation: 'glow', xs: 7 }">
          <CPlaceholder :xs="6" />
        </CCardTitle>
        <CCardText v-c-placeholder="{ animation: 'glow' }">
          <CPlaceholder :xs="7" />
          <CPlaceholder :xs="4" />
          <CPlaceholder :xs="4" />
          <CPlaceholder :xs="6" />
          <CPlaceholder :xs="8" />
        </CCardText>
        <CButton
          v-c-placeholder="{ xs: 6 }"
          color="primary"
          aria-hidden="true"
          disabled
          href="#"
          tabindex="-1"
        ></CButton>
      </CCardBody>
    </CCard>
  </div>
</template>

<script setup>
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CPlaceholder,
} from '@coreui/vue'
</script>
