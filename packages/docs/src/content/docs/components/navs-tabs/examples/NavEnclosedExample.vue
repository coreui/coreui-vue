<template>
  <CNav variant="enclosed">
    <CNavItem>
      <CNavLink href="#" active> Active </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#">Link</CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#">Link</CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#" disabled> Disabled </CNavLink>
    </CNavItem>
  </CNav>
</template>

<script setup>
import { CNav, CNavItem, CNavLink } from '@coreui/vue'
</script>
