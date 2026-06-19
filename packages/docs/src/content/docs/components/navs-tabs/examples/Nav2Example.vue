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
import { ref } from 'vue'
const tabPaneActiveKey = ref(1)
const tabPanePillsActiveKey = ref(1)
</script>
