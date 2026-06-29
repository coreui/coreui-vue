<template>
  <CNav as="nav">
    <CNavLink href="#" active> Active </CNavLink>
    <CNavLink href="#">Link</CNavLink>
    <CNavLink href="#">Link</CNavLink>
    <CNavLink href="#" disabled> Disabled </CNavLink>
  </CNav>
</template>

<script setup>
import { CNav, CNavLink } from '@coreui/vue'
</script>
