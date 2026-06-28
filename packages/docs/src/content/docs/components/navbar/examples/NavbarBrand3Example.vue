<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">
        <img
          src="/assets/brand/coreui-signet.svg"
          alt=""
          width="22"
          height="24"
          class="d-inline-block align-top"
        />
        CoreUI
      </CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/vue'
</script>
