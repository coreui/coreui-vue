<template>
  <CPagination aria-label="Page navigation example">
    <CPaginationItem aria-label="Previous" href="#"
      ><span aria-hidden="true">&laquo;</span></CPaginationItem
    >
    <CPaginationItem href="#">1</CPaginationItem>
    <CPaginationItem href="#">2</CPaginationItem>
    <CPaginationItem href="#">3</CPaginationItem>
    <CPaginationItem aria-label="Next" href="#"
      ><span aria-hidden="true">&raquo;</span></CPaginationItem
    >
  </CPagination>
</template>

<script setup>
import { CPagination, CPaginationItem } from '@coreui/vue'
</script>
