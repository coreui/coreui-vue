<template>
  <CCard>
    <CCardHeader>Quote</CCardHeader>
    <CCardBody>
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody } from '@coreui/vue'
</script>
