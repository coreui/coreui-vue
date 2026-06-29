<template>
  <CCollapse
    id="navbarToggleExternalContent"
    :visible="visibleExternalContent"
    data-coreui-theme="dark"
  >
    <div class="bg-dark p-4">
      <h5 class="text-body-emphasis h4">Collapsed content</h5>
      <span class="text-body-secondary">Toggleable via the navbar brand.</span>
    </div>
  </CCollapse>
  <CNavbar color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarToggler
        aria-controls="navbarToggleExternalContent"
        aria-label="Toggle navigation"
        @click="visibleExternalContent = !visibleExternalContent"
      />
    </CContainer>
  </CNavbar>
</template>

<script setup>
import { CCollapse, CNavbar, CContainer, CNavbarToggler } from '@coreui/vue'
import { ref } from 'vue'
const visibleExternalContent = ref(false)
</script>
