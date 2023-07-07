<template>
  <CHeader class="mb-5 elevation-0 border-bottom" position="sticky">
    <CHeaderToggler class="ms-md-3" @click="$emit('toggle-sidebar')">
      <CIcon icon="cil-menu" size="lg" />
    </CHeaderToggler>
    <div class="docs-search" id="docsearch"></div>
    <CHeaderNav class="ms-auto">
      <CNavItem href="https://github.com/coreui">
        <CIcon icon="cib-github" size="xl" />
      </CNavItem>
      <CNavItem href="https://twitter.com/core_ui">
        <CIcon icon="cib-twitter" size="xl" />
      </CNavItem>
      <CNavItem href="https://opencollective.com/coreui">
        <CIcon icon="cib-open-collective" size="xl" />
      </CNavItem>
      <li class="nav-item py-2 py-lg-1">
        <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-body text-opacity-75"></div>
        <hr class="d-lg-none my-2 text-white-50" />
      </li>
    </CHeaderNav>
    <CButton
      class="d-lg-inline-block my-2 my-md-0 ms-md-3"
      color="primary"
      component="a"
      href="https://coreui.io/vue/docs/getting-started/introduction.html"
      variant="outline"
    >
      <CIcon icon="cil-cloud-download" /> Download
    </CButton>
    <CButton
      class="d-lg-inline-block my-2 my-md-0 ms-md-3"
      color="primary"
      href="https://coreui.io/about/services/?docs=coreui-header-button"
      variant="outline"
    >
      <CIcon class="me-2" icon="cil-handshake" /> Hire Us
    </CButton>
    <CButton
      class="d-lg-inline-block my-2 my-md-0 ms-md-3"
      color="primary"
      component="a"
      href="https://coreui.io/pricing/?framework=vue&docs=coreui-header-button"
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
  setup() {},
})
</script>
