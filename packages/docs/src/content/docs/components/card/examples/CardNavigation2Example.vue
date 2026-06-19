<template>
  <CCard class="text-center">
    <CCardHeader>
      <CNav variant="pills" class="card-header-pills">
        <CNavItem>
          <CNavLink href="#" active> Active </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#"> Link </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled> Disabled </CNavLink>
        </CNavItem>
      </CNav>
    </CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import {
  CCard,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/vue'
</script>
