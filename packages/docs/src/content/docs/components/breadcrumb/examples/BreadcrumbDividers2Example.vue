<template>
  <CBreadcrumb :style="dividerStyle">
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'

const dividerStyle = {
  '--cui-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
}
</script>
