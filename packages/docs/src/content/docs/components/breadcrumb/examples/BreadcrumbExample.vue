<template>
  <CBreadcrumb>
    <CBreadcrumbItem active>Home</CBreadcrumbItem>
  </CBreadcrumb>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
  <CBreadcrumb>
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
    <CBreadcrumbItem active>Data</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
