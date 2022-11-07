<template>
  <CFooter class="docs-footer p-3 p-md-5 mt-5 text-center text-sm-start">
    <CContainer>
      <ul class="docs-footer-links ps-0 mb-3">
        <li class="d-inline-block">
          <a href="https://github.com/coreui">GitHub</a>
        </li>
        <li class="d-inline-block ms-3">
          <a href="https://twitter.com/core_ui">Twitter</a>
        </li>
        <li class="d-inline-block ms-3 ps-3 border-start border-2">
          <a href="https://coreui.io/">CoreUI (Vanilla)</a>
        </li>
        <li class="d-inline-block ms-3">
          <a href="https://coreui.io/angular/">CoreUI for Angular</a>
        </li>
        <li class="d-inline-block ms-3">
          <a href="https://coreui.io/react/">CoreUI for React.js</a>
        </li>
      </ul>
      <p class="mb-0">CoreUI for Vue is Open Source UI Components Library for Vue.js.</p>
      <p class="mb-0">
        CoreUI code licensed
        <a
          href="https://github.com/coreui/coreui/blob/main/LICENSE"
          target="_blank"
          rel="license noopener"
        >MIT</a>, docs 
        <a
          href="https://creativecommons.org/licenses/by/3.0/"
          target="_blank"
          rel="license noopener"
        >CC BY 3.0</a>.
        <strong>CoreUI PRO requires a <a href="https://coreui.io/pricing/?framework=vue&docs=footer">commercial license</a>.</strong>
      </p>
    </CContainer>
  </CFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pkg from './../../../../../package.json'
export default defineComponent({
  name: 'Footer',
  setup () {
    const version = pkg.version
    return {
      version
    }
  }
})
</script>
