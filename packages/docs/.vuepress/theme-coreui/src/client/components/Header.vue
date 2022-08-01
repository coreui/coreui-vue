<template>
  <CHeader class="mb-5 elevation-0 border-bottom" position="sticky">
    <CHeaderToggler class="ms-md-3" @click="$emit('toggle-sidebar')">
      <CIcon icon="cil-menu" size="lg" />
    </CHeaderToggler>
    <CHeaderNav class="ms-auto">
      <CNavItem href="https://github.com/coreui">
        <CIcon icon="cib-github" size="xl" />
      </CNavItem>
      <CNavItem href="https://twitter.com/core_ui">
        <CIcon icon="cib-twitter" size="xl" />
      </CNavItem>
    </CHeaderNav>
    <CButton
      class="d-lg-inline-block my-2 my-md-0 ms-md-3"
      color="primary"
      href="https://coreui.io/react/#compare"
      variant="outline"
    >
      <CIcon icon="cil-cloud-download" /> Download
    </CButton>
    <CButton
      class="d-lg-inline-block my-2 my-md-0 ms-md-3"
      color="primary"
      href="https://coreui.io/pro/react/"
    >
      Get CoreUI PRO
    </CButton>
  </CHeader>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  emits: ['toggle-sidebar'],
})
</script>
