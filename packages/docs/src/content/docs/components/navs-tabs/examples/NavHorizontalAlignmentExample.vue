<template>
  <CNav class="justify-content-center">
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
import { ref } from 'vue'
const tabPaneActiveKey = ref(1)
const tabPanePillsActiveKey = ref(1)
</script>
