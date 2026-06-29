<template>
  <CCard style="width: 18rem">
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardSubtitle class="mb-2 text-body-secondary">Card subtitle</CCardSubtitle>
      <CCardText
        >Some quick example text to build on the card title and make up the bulk of the card's
        content.</CCardText
      >
      <CCardLink href="#">Card link</CCardLink>
      <CCardLink href="#">Another link</CCardLink>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/vue'
</script>
