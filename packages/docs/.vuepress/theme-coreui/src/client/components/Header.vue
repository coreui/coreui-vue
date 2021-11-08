<template>
  <CAlert color="light" class="d-flex justify-content-center rounded-0 border-bottom mb-0">
    <span class="me-3">
      If you like this project and want to help us, please give us a star ⭐️ on Github. ➡️
    </span>
    <github-button href="https://github.com/coreui/coreui-vue" data-size="large" aria-label="Star coreui/coreui-vue on GitHub">Star</github-button>
    <span class="ms-3">🙏</span>
  </CAlert>
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
import GithubButton from 'vue-github-button'

export default defineComponent({
  name: 'Header',
  components: {
    GithubButton
  },
  emits: ['toggle-sidebar'],
})
</script>
