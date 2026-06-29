<template>
  <CPagination align="center" aria-label="Page navigation example">
    <CPaginationItem disabled>Previous</CPaginationItem>
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem href="#">Next</CPaginationItem>
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
