<template>
  <CBreadcrumb
    style="
      --cui-breadcrumb-divider: url(
        &#34;data:image/svg + xml,
        %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='currentColor'/%3E%3C/svg%3E&#34;
      );
    "
  >
    <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
    <CBreadcrumbItem active>Library</CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script setup>
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue'
</script>
